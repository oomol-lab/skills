---
name: oo-oomol-rag
description: "OOMOL RAG (knowledge-base.oomol.com). Use this skill for ANY OOMOL RAG request — reading, creating, updating, and deleting data. Whenever a task involves OOMOL RAG, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "OOMOL RAG"
  author: "OOMOL"
  version: "1.0.2"
  services: ["oomol_rag"]
  icon: "https://static.oomol.com/logo/third-party/oomol_rag.svg"
---

# OOMOL RAG

Operate **OOMOL RAG** through your OOMOL-connected account. This skill calls the `oomol_rag` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

OOMOL RAG needs no account connection. Assume the oo CLI is installed and signed in. **Do not run `oo auth login` proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "oomol_rag" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "oomol_rag" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

### Choose the shortest workflow

Use `retrieve` immediately when the knowledge base already contains the source material. There is no need to list files first.

```bash
oo connector run "oomol_rag" \
  --action "retrieve" \
  --data '{"query":"How do I deploy this project?","topK":5}' \
  --json
```

Use these action paths for other tasks:

- Add knowledge: `upload_file` -> `wait_for_file_ready` -> `retrieve`.
- Inspect sources: `list_files` to discover file IDs, then `get_file` for one file.
- Export a source: `download_file` returns a temporary public URL.
- Remove a source: `delete_file` -> `wait_for_file_deleted`. Confirm deletion with the user before starting it.

`upload_file` accepts a publicly reachable HTTP or HTTPS URL, not a local path. Keep the returned `file.id`; the wait, download, and delete actions use it as `fileId`.

The wait actions return the current state; one call does not block until completion. Repeat the same call about every 15 seconds. For ingestion, continue only when `file.status` is `ready`, and stop on `failed`, `uncertain`, `deleting`, or `deleted`. For deletion, continue until `file.status` is `deleted`, and stop on `failed` or `uncertain`.

```bash
oo connector run "oomol_rag" \
  --action "upload_file" \
  --data '{"fileUrl":"https://example.com/handbook.pdf","filename":"handbook.pdf"}' \
  --json

# Repeat about every 15 seconds until file.status is "ready".
oo connector run "oomol_rag" \
  --action "wait_for_file_ready" \
  --data '{"fileId":"<file.id from upload_file>"}' \
  --json

oo connector run "oomol_rag" \
  --action "retrieve" \
  --data '{"query":"What is the expense approval process?"}' \
  --json
```

For file administration, start with a paginated listing. Pass each non-empty `nextCursor` unchanged as the next request's `cursor`; stop when `nextCursor` is an empty string.

```bash
oo connector run "oomol_rag" \
  --action "list_files" \
  --data '{"limit":50}' \
  --json

oo connector run "oomol_rag" \
  --action "list_files" \
  --data '{"cursor":"<nextCursor from the previous response>","limit":50}' \
  --json

oo connector run "oomol_rag" \
  --action "download_file" \
  --data '{"fileId":"<file.id from list_files>"}' \
  --json
```

### Create or edit an editable knowledge article

Use `create_article` -> `save_article_draft` -> `get_article`. Stop at a draft unless the user also requested publishing. When requested, use `publish_article` -> `wait_for_article_ready`.

Generate a UUIDv7 once per creation intent and pass it as `articleId`. Generate distinct stable `saveId` and `publishId` values for each save and publication. After a network failure, retry with the identical ID and payload; do not generate another ID or silently overwrite a concurrent edit.

For `save_article_draft`, use the returned `revision`, a `title`, and native BlockNote content:

```json
{
  "articleId": "<stable article ID>",
  "revision": 1,
  "saveId": "<stable save ID>",
  "title": "Example article",
  "content": {
    "type": "blocknote",
    "blocks": [
      {
        "id": "intro",
        "type": "paragraph",
        "content": [{ "type": "text", "text": "Article text", "styles": {} }],
        "children": []
      }
    ]
  }
}
```

Use `--data @draft.json` for document bodies. Markdown strings are not accepted as `content`; produce native BlockNote blocks. On an existing article, read it first, check `formatVersion`, and preserve its block structure and IDs. Do not reinterpret legacy editor JSON as BlockNote.

On 409, fetch the latest article and reconcile changes before saving a new operation. Publication uses the saved `revision` and a stable `publishId`. Poll about every 15 seconds; stop on `failed` or `uncertain`. `ready` means `syncRevision` is indexed: a newer draft may exist, so compare `syncRevision` to the revision you published. An uncertain synchronization outcome requires investigation, not a fresh publication ID.

`list_articles` returns metadata and a `nextCursor`; `get_article` returns the full body. `delete_article` removes the editable article and excludes its index from retrieval while preserving the original converted file. Delete only when requested by the user.

## Available actions

- `create_article` — Create an empty editable knowledge article as a draft. A caller-stable articleId prevents duplicate creation on retries; an existing ID returns its article without overwriting it. [write]
- `delete_article` — Delete an article and exclude its index from retrieval. Underlying index cleanup is asynchronous; any original converted file is preserved. [destructive]
- `delete_file` — Start asynchronous deletion of a knowledge-base file. [destructive]
- `download_file` — Download a knowledge-base file through OOMOL file transit and return a temporary public URL.
- `get_article` — Read the full editable article, its format version, revision and knowledge-base synchronization state.
- `get_file` — Get metadata and processing status for a knowledge-base file.
- `list_articles` — List knowledge articles with draft and synchronization metadata, without document bodies.
- `list_files` — List files in the current OOMOL team's knowledge base.
- `publish_article` — Publish an exact saved revision to the knowledge base, replacing its previous index asynchronously. Retry uncertain transport outcomes with the same publishId and revision. Stop and inspect failed or uncertain synchronization states. [write]
- `retrieve` — Retrieve the most relevant text chunks from the current OOMOL team's knowledge base.
- `save_article_draft` — Save BlockNote content and title with optimistic revision checking. This only saves a draft; publish_article updates retrieval. Retry an uncertain request with the identical saveId, revision and body. [write]
- `upload_file` — Upload a publicly reachable file URL to the current OOMOL team's knowledge base and start asynchronous indexing. [write]
- `wait_for_article_ready` — Poll the latest article publication once. Ready means its syncRevision is indexed; a newer draft can still be unpublished. Compare syncRevision with your requested revision when tracking a particular publication.
- `wait_for_file_deleted` — Get a file's deletion state while waiting for deletion to finish.
- `wait_for_file_ready` — Get a file's ingestion state while waiting for it to become searchable.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change OOMOL RAG state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- OOMOL RAG homepage: https://knowledge-base.oomol.com

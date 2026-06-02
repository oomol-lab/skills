---
name: oo-listennotes
description: "Listen Notes (listennotes.com). Use this skill for ANY Listen Notes request — searching and reading data. Whenever a task involves Listen Notes, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Listen Notes"
  author: "OOMOL"
  version: "1.0.0"
  service: "listennotes"
  categories: "Data & Analytics"
  homepage: "https://www.listennotes.com"
  icon: "https://static.oomol.com/logo/third-party/Listen%20Notes.svg"
---

# Listen Notes

Operate **Listen Notes** through your OOMOL-connected account. This skill calls the `listennotes` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Listen Notes. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "listennotes" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "listennotes" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_best_podcasts`](actions/get_best_podcasts.md) — Get ranked best podcasts from Listen Notes with optional directory filters.
- [`get_episode`](actions/get_episode.md) — Get Listen Notes episode details by episode ID.
- [`get_genres`](actions/get_genres.md) — Get the supported Listen Notes podcast genres.
- [`get_languages`](actions/get_languages.md) — Get the supported Listen Notes podcast languages.
- [`get_podcast`](actions/get_podcast.md) — Get Listen Notes podcast details and one page of episodes by podcast ID.
- [`get_regions`](actions/get_regions.md) — Get the supported Listen Notes regions used by best podcasts.
- [`get_related_podcasts`](actions/get_related_podcasts.md) — Get related podcast recommendations from Listen Notes by podcast ID.
- [`search`](actions/search.md) — Search Listen Notes podcasts or episodes by keyword.
- [`typeahead`](actions/typeahead.md) — Get Listen Notes typeahead suggestions for terms, genres, and podcasts.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Listen Notes state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Listen Notes is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=listennotes
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Listen Notes homepage: https://www.listennotes.com

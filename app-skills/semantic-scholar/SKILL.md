---
name: semantic-scholar
description: "Semantic Scholar (semanticscholar.org). Use this skill for ANY Semantic Scholar request — searching and reading data. Whenever a task involves Semantic Scholar, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Semantic Scholar"
  author: "OOMOL"
  version: "1.0.0"
  service: "semantic_scholar"
  categories: "AI, Data & Analytics"
  homepage: "https://www.semanticscholar.org/"
  icon: "https://static.oomol.com/logo/third-party/semantic_scholar.svg"
---

# Semantic Scholar

Operate **Semantic Scholar** through your OOMOL-connected account. This skill calls the `semantic_scholar` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Data & Analytics. Exposes 16 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Semantic Scholar. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "semantic_scholar" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "semantic_scholar" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`autocomplete_papers`](actions/autocomplete_papers.md) — Suggest Semantic Scholar paper query completions.
- [`bulk_search_papers`](actions/bulk_search_papers.md) — Bulk-search Semantic Scholar papers and page through large result sets with tokens.
- [`get_author`](actions/get_author.md) — Get details for a Semantic Scholar author.
- [`get_author_papers`](actions/get_author_papers.md) — List papers written by a Semantic Scholar author.
- [`get_authors`](actions/get_authors.md) — Get details for multiple Semantic Scholar authors at once.
- [`get_paper`](actions/get_paper.md) — Get details for a Semantic Scholar paper by paper ID or external identifier.
- [`get_paper_authors`](actions/get_paper_authors.md) — List authors for a Semantic Scholar paper.
- [`get_paper_citations`](actions/get_paper_citations.md) — List papers that cite a Semantic Scholar paper.
- [`get_paper_references`](actions/get_paper_references.md) — List papers referenced by a Semantic Scholar paper.
- [`get_papers`](actions/get_papers.md) — Get details for multiple Semantic Scholar papers at once.
- [`match_paper_title`](actions/match_paper_title.md) — Find the best Semantic Scholar paper match for a paper title.
- [`recommend_for_paper`](actions/recommend_for_paper.md) — Get recommended Semantic Scholar papers for one positive example paper.
- [`recommend_papers`](actions/recommend_papers.md) — Get recommended Semantic Scholar papers from positive and optional negative examples.
- [`search_authors`](actions/search_authors.md) — Search Semantic Scholar authors by name.
- [`search_papers`](actions/search_papers.md) — Search Semantic Scholar papers by relevance with optional publication filters.
- [`search_snippets`](actions/search_snippets.md) — Search text snippets in Semantic Scholar papers.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Semantic Scholar state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Semantic Scholar is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=semantic_scholar
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Semantic Scholar homepage: https://www.semanticscholar.org/

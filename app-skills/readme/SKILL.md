---
name: readme
description: "ReadMe (readme.com). Use this skill for ANY ReadMe request — reading, creating, updating, and deleting data. Whenever a task involves ReadMe, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ReadMe"
  author: "OOMOL"
  version: "1.0.0"
  service: "readme"
  categories: "Developer Tools, Productivity"
  homepage: "https://readme.com"
  icon: "https://static.oomol.com/logo/third-party/readme.svg"
---

# ReadMe

Operate **ReadMe** through your OOMOL-connected account. This skill calls the `readme` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Productivity. Exposes 33 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ReadMe. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "readme" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "readme" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`ask_owlbot`](actions/ask_owlbot.md) — Ask ReadMe Owlbot a non-streaming question and return its answer with sources.
- [`create_category`](actions/create_category.md) — Create a ReadMe guide or reference category.
- [`create_changelog`](actions/create_changelog.md) — Create a ReadMe changelog entry.
- [`create_custom_page`](actions/create_custom_page.md) — Create a ReadMe custom page.
- [`create_doc`](actions/create_doc.md) — Create a ReadMe doc page using a category ID or category slug.
- [`create_version`](actions/create_version.md) — Create a new ReadMe project version from an existing base version.
- [`delete_api_specification`](actions/delete_api_specification.md) — Delete one ReadMe API specification by ID.
- [`delete_category`](actions/delete_category.md) — Delete one ReadMe category by slug.
- [`delete_changelog`](actions/delete_changelog.md) — Delete one ReadMe changelog entry by slug.
- [`delete_custom_page`](actions/delete_custom_page.md) — Delete one ReadMe custom page by slug.
- [`delete_doc`](actions/delete_doc.md) — Delete one ReadMe doc page by slug.
- [`delete_version`](actions/delete_version.md) — Delete one ReadMe project version by semver identifier.
- [`get_api_registry`](actions/get_api_registry.md) — Retrieve one ReadMe API Registry entry by UUID.
- [`get_category`](actions/get_category.md) — Get one ReadMe category by slug.
- [`get_changelog`](actions/get_changelog.md) — Get one ReadMe changelog entry by slug.
- [`get_custom_page`](actions/get_custom_page.md) — Get one ReadMe custom page by slug.
- [`get_doc`](actions/get_doc.md) — Get one ReadMe doc by slug, optionally requesting the production doc version.
- [`get_openapi_schema`](actions/get_openapi_schema.md) — Get the OpenAPI definition for the ReadMe project.
- [`get_project`](actions/get_project.md) — Get metadata for the ReadMe project associated with the API key.
- [`get_version`](actions/get_version.md) — Get one ReadMe project version by semver identifier.
- [`list_api_specifications`](actions/list_api_specifications.md) — List ReadMe API specification metadata with optional version and pagination.
- [`list_categories`](actions/list_categories.md) — List ReadMe guide and reference categories with optional version and pagination.
- [`list_category_docs`](actions/list_category_docs.md) — List the ReadMe docs that belong to a category slug.
- [`list_changelogs`](actions/list_changelogs.md) — List ReadMe changelog entries with optional pagination.
- [`list_custom_pages`](actions/list_custom_pages.md) — List ReadMe custom pages with optional pagination.
- [`list_outbound_ips`](actions/list_outbound_ips.md) — List ReadMe outbound IP addresses used for webhook and Try It proxy requests.
- [`list_versions`](actions/list_versions.md) — List the versions configured for the ReadMe project.
- [`search_docs`](actions/search_docs.md) — Search ReadMe docs by text query.
- [`update_category`](actions/update_category.md) — Update one ReadMe category by slug.
- [`update_changelog`](actions/update_changelog.md) — Update one ReadMe changelog entry by slug.
- [`update_custom_page`](actions/update_custom_page.md) — Update one ReadMe custom page by slug.
- [`update_doc`](actions/update_doc.md) — Update one ReadMe doc page by slug.
- [`update_version`](actions/update_version.md) — Update one ReadMe project version by semver identifier.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ReadMe state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ReadMe is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=readme
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ReadMe homepage: https://readme.com

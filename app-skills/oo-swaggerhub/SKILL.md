---
name: oo-swaggerhub
description: "SwaggerHub (swagger.io). Use this skill for ANY SwaggerHub request — searching and reading data. Whenever a task involves SwaggerHub, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SwaggerHub"
  author: "OOMOL"
  version: "1.0.0"
  service: "swaggerhub"
  categories: "Developer Tools"
  homepage: "https://swagger.io/tools/swaggerhub/"
  icon: "https://static.oomol.com/logo/third-party/Swaggerhub.svg"
---

# SwaggerHub

Operate **SwaggerHub** through your OOMOL-connected account. This skill calls the `swaggerhub` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SwaggerHub. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "swaggerhub" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "swaggerhub" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_api_definition`](actions/get_api_definition.md) — Fetch a SwaggerHub API definition in JSON or YAML format, with optional resolved and flattened output.
- [`get_domain_definition`](actions/get_domain_definition.md) — Fetch a SwaggerHub domain definition in JSON or YAML format.
- [`get_project`](actions/get_project.md) — Fetch a single SwaggerHub project by owner and project identifier.
- [`get_template_definition`](actions/get_template_definition.md) — Fetch a SwaggerHub template definition in JSON or YAML format, with optional flattening.
- [`list_api_versions`](actions/list_api_versions.md) — List the versions available for a specific SwaggerHub API.
- [`list_domain_versions`](actions/list_domain_versions.md) — List the versions available for a specific SwaggerHub domain.
- [`list_owner_apis`](actions/list_owner_apis.md) — List SwaggerHub APIs that belong to a specific owner.
- [`list_owner_domains`](actions/list_owner_domains.md) — List SwaggerHub domains that belong to a specific owner.
- [`list_projects`](actions/list_projects.md) — List SwaggerHub projects for a specific owner.
- [`list_template_versions`](actions/list_template_versions.md) — List the versions available for a specific SwaggerHub template.
- [`list_templates`](actions/list_templates.md) — List SwaggerHub templates, optionally filtered by owner.
- [`search_apis`](actions/search_apis.md) — Search SwaggerHub APIs using the registry search endpoint.
- [`search_domains`](actions/search_domains.md) — Search SwaggerHub domains using the registry search endpoint.
- [`search_registry_specs`](actions/search_registry_specs.md) — Search SwaggerHub registry items across APIs, domains, and templates using the unified /specs listing.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SwaggerHub state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SwaggerHub is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=swaggerhub
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SwaggerHub homepage: https://swagger.io/tools/swaggerhub/

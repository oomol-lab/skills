---
name: oo-the-dog-api
description: "The Dog API (thedogapi.com). Use this skill for ANY The Dog API request — reading, creating, updating, and deleting data. Whenever a task involves The Dog API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "The Dog API"
  author: "OOMOL"
  version: "1.0.0"
  service: "the_dog_api"
  categories: "Design & Media, Data & Analytics"
  homepage: "https://thedogapi.com/"
---

# The Dog API

Operate **The Dog API** through your OOMOL-connected account. This skill calls the `the_dog_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Data & Analytics. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected The Dog API. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "the_dog_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "the_dog_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_favourite`](actions/create_favourite.md) — Create one favourite dog image record.
- [`create_vote`](actions/create_vote.md) — Create one dog image vote.
- [`delete_favourite`](actions/delete_favourite.md) — Delete one favourite dog image record.
- [`delete_vote`](actions/delete_vote.md) — Delete one dog image vote.
- [`get_breed`](actions/get_breed.md) — Get one dog breed by its The Dog API breed identifier.
- [`get_image`](actions/get_image.md) — Get one dog image by its The Dog API image identifier.
- [`list_breeds`](actions/list_breeds.md) — List dog breeds supported by The Dog API.
- [`list_favourites`](actions/list_favourites.md) — List favourite dog images for the connected The Dog API account.
- [`list_votes`](actions/list_votes.md) — List dog image votes for the connected The Dog API account.
- [`search_breeds`](actions/search_breeds.md) — Search dog breeds by breed name.
- [`search_images`](actions/search_images.md) — Search for dog images with optional breed, category, type, size, and paging filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change The Dog API state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — The Dog API is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=the_dog_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- The Dog API homepage: https://thedogapi.com/

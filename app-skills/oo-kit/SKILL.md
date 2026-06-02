---
name: oo-kit
description: "Kit (kit.com). Use this skill for ANY Kit request — reading, creating, and updating data. Whenever a task involves Kit, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Kit"
  author: "OOMOL"
  version: "1.0.0"
  service: "kit"
  categories: "Marketing, Communication"
  homepage: "https://kit.com/"
  icon: "https://static.oomol.com/logo/third-party/kit.svg"
---

# Kit

Operate **Kit** through your OOMOL-connected account. This skill calls the `kit` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Communication. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Kit. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "kit" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "kit" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_subscriber`](actions/create_subscriber.md) — Create a Kit subscriber, or update the existing subscriber with the same email address.
- [`get_current_account`](actions/get_current_account.md) — Get the current Kit account and authenticated user details.
- [`get_subscriber`](actions/get_subscriber.md) — Get one Kit subscriber by ID.
- [`list_form_subscribers`](actions/list_form_subscribers.md) — List Kit subscribers who joined through a specific form.
- [`list_forms`](actions/list_forms.md) — List Kit forms and landing pages with optional filters and pagination.
- [`list_subscribers`](actions/list_subscribers.md) — List Kit subscribers with optional filtering, sorting, and pagination.
- [`list_tag_subscribers`](actions/list_tag_subscribers.md) — List Kit subscribers who have a specific tag.
- [`list_tags`](actions/list_tags.md) — List Kit tags with optional pagination.
- [`update_subscriber`](actions/update_subscriber.md) — Update a Kit subscriber's email address, first name, and custom fields.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Kit state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Kit is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=kit
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Kit homepage: https://kit.com/

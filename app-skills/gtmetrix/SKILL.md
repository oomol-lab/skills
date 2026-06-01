---
name: gtmetrix
description: "GTmetrix (gtmetrix.com). Use this skill for ANY GTmetrix request — searching and reading data. Whenever a task involves GTmetrix, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "GTmetrix"
  author: "OOMOL"
  version: "1.0.0"
  service: "gtmetrix"
  categories: "Developer Tools, Data & Analytics"
  homepage: "https://gtmetrix.com"
  icon: "https://static.oomol.com/logo/third-party/GTmetrix.svg"
---

# GTmetrix

Operate **GTmetrix** through your OOMOL-connected account. This skill calls the `gtmetrix` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Data & Analytics. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected GTmetrix. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "gtmetrix" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "gtmetrix" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_account_status`](actions/get_account_status.md) — Get the current GTmetrix account status, credits, and plan capabilities.
- [`get_browser`](actions/get_browser.md) — Get a single GTmetrix browser by ID.
- [`get_latest_page_report`](actions/get_latest_page_report.md) — Get the latest GTmetrix report associated with a page.
- [`get_location`](actions/get_location.md) — Get a single GTmetrix test location by ID.
- [`get_page`](actions/get_page.md) — Get a single GTmetrix page by slug.
- [`get_report`](actions/get_report.md) — Get a single GTmetrix report by slug.
- [`get_simulated_device`](actions/get_simulated_device.md) — Get a single GTmetrix simulated device by ID.
- [`get_test`](actions/get_test.md) — Get the current state of a GTmetrix test and detect when it has completed.
- [`list_browsers`](actions/list_browsers.md) — List GTmetrix browsers that can be used for tests.
- [`list_locations`](actions/list_locations.md) — List GTmetrix test locations available to the connected account.
- [`list_page_reports`](actions/list_page_reports.md) — List GTmetrix reports associated with a single page.
- [`list_pages`](actions/list_pages.md) — List GTmetrix pages associated with the connected account.
- [`list_simulated_devices`](actions/list_simulated_devices.md) — List GTmetrix simulated devices that can be used for tests.
- [`list_tests`](actions/list_tests.md) — List GTmetrix tests for the connected account.
- [`start_test`](actions/start_test.md) — Start a new GTmetrix performance test for a URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change GTmetrix state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — GTmetrix is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=gtmetrix
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- GTmetrix homepage: https://gtmetrix.com

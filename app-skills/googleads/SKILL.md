---
name: googleads
description: "Google Ads (ads.google.com). Use this skill for ANY Google Ads request — reading, creating, updating, and deleting data. Whenever a task involves Google Ads, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Ads"
  author: "OOMOL"
  version: "1.0.0"
  service: "googleads"
  categories: "Marketing, Data & Analytics"
  homepage: "https://ads.google.com"
  icon: "https://static.oomol.com/logo/third-party/Google%20Ads.svg"
---

# Google Ads

Operate **Google Ads** through your OOMOL-connected account. This skill calls the `googleads` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Ads. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "googleads" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "googleads" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_or_remove_to_customer_list`](actions/add_or_remove_to_customer_list.md) — Submit Customer Match user identifiers to add users to or remove users from a Google Ads customer list.
- [`create_customer_list`](actions/create_customer_list.md) — Create a new Google Ads CRM-based customer list for Customer Match uploads.
- [`get_campaign_by_id`](actions/get_campaign_by_id.md) — Retrieve one Google Ads campaign by its campaign ID.
- [`get_campaign_by_name`](actions/get_campaign_by_name.md) — Retrieve all Google Ads campaigns that exactly match a campaign name.
- [`list_accessible_customers`](actions/list_accessible_customers.md) — List Google Ads customer resource names accessible to the current OAuth credential.
- [`list_customer_lists`](actions/list_customer_lists.md) — List Google Ads customer lists available under the specified customer account.
- [`mutate_ad_groups`](actions/mutate_ad_groups.md) — Create, update, or remove Google Ads ad groups in a single mutate request.
- [`mutate_campaigns`](actions/mutate_campaigns.md) — Create, update, or remove Google Ads campaigns in a single mutate request.
- [`search_stream_gaql`](actions/search_stream_gaql.md) — Execute a GAQL streaming query and return the aggregated result rows in one response.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Ads state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Ads is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=googleads
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Ads homepage: https://ads.google.com

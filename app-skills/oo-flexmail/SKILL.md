---
name: oo-flexmail
description: "Flexmail (flexmail.be). Use this skill for ANY Flexmail request — reading, creating, updating, and deleting data. Whenever a task involves Flexmail, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Flexmail"
  author: "OOMOL"
  version: "1.0.0"
  services: ["flexmail"]
  icon: "https://static.oomol.com/logo/third-party/flexmail.svg"
---

# Flexmail

Operate **Flexmail** through your OOMOL-connected account. This skill calls the `flexmail` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Flexmail. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "flexmail" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "flexmail" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `add_contact_interest_subscription` — Subscribe a Flexmail contact to an interest. [write]
- `add_contact_preference_subscription` — Subscribe a Flexmail contact to a preference. [write]
- `create_contact` — Create a Flexmail contact in a specific source. [write]
- `create_interest` — Create a Flexmail interest. [write]
- `delete_interest` — Delete a Flexmail interest by UUID. [destructive]
- `get_contact` — Fetch a Flexmail contact by id.
- `get_interest` — Fetch a Flexmail interest by UUID.
- `get_source` — Fetch a Flexmail source by id.
- `list_account_contact_languages` — Fetch the contact languages configured for the Flexmail account.
- `list_contact_interest_subscriptions` — List the interests to which a Flexmail contact is subscribed.
- `list_contact_preferences` — List preferences selected by a Flexmail contact.
- `list_contact_sources` — List sources through which a Flexmail contact was added.
- `list_contacts` — List Flexmail contacts, optionally filtering by email address and paging through the collection.
- `list_custom_fields` — List custom fields configured in the Flexmail account.
- `list_interest_labels` — List Flexmail interest labels.
- `list_interests` — List Flexmail interests with optional name and visibility filters.
- `list_preferences` — List preferences configured in the Flexmail account.
- `list_segments` — List active segments in the Flexmail account.
- `list_sources` — List sources configured in the Flexmail account.
- `remove_contact_interest_subscription` — Remove a Flexmail contact from an interest. [destructive]
- `remove_contact_preference_subscription` — Remove a Flexmail contact preference subscription by compound id. [destructive]
- `unsubscribe_contact` — Unsubscribe a Flexmail contact from all future communication. [destructive]
- `update_contact` — Partially update a Flexmail contact. [write]
- `update_interest` — Partially update a Flexmail interest. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Flexmail state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Flexmail is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=flexmail
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Flexmail homepage: https://flexmail.be/en

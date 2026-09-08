---
name: oo-app-store-server
description: "App Store Server API (developer.apple.com). Use this skill for ANY App Store Server API request — reading, creating, and updating data. Whenever a task involves App Store Server API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "App Store Server API"
  author: "OOMOL"
  version: "1.0.0"
  services: ["app_store_server"]
---

# App Store Server API

Operate **App Store Server API** through your OOMOL-connected account. This skill calls the `app_store_server` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected App Store Server API. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "app_store_server" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "app_store_server" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `extend_renewal_date_for_all_active_subscribers` — Extend the renewal date of every active subscription to one product, optionally limited to some storefronts. The App Store processes the request asynchronously; poll get_subscription_renewal_date_extension_status for the outcome. The extension cannot be reversed.
- `extend_subscription_renewal_date` — Extend the renewal date of one customer's active auto-renewable subscription, to compensate for a service outage or a cancelled event. The extension cannot be reversed, and Apple emails the customer about the new renewal date.
- `finish_transaction` — Tell the App Store that your server finished delivering the content for a transaction. Call it only after the customer has the content; it cannot be undone. Apple still returns a finished transaction from get_transaction_history, so do not treat its disappearance as confirmation.
- `get_all_subscription_statuses` — Read the status of every auto-renewable subscription a customer has for your app, grouped by subscription group, with the latest transaction and renewal information of each decoded from the signed payloads Apple returns.
- `get_app_transaction_info` — Read the app download transaction for a customer, decoded from the signed payload Apple returns. It records when and on which platform the customer first acquired the app.
- `get_notification_history` — List the App Store Server Notifications the App Store tried to deliver to your server in a time span, with each notification payload decoded. History covers the past 180 days in production and the past 30 days in sandbox, and returns up to 20 records per page.
- `get_refund_history` — List the in-app purchase transactions the App Store refunded for a customer in your app, newest first, decoded from the signed payloads Apple returns. Returns up to 20 transactions per page.
- `get_subscription_renewal_date_extension_status` — Check how far the App Store has got with a renewal date extension that was requested for all active subscribers of a product.
- `get_test_notification_status` — Read the delivery result of a test notification, with the notification payload decoded from the signed payload Apple returns. Apple answers 404 until it has finished the first delivery attempt.
- `get_transaction_history` — List a customer's in-app purchase transactions for your app, oldest first by default, decoded from the signed payloads Apple returns. Pass sort DESCENDING to get the most recent transactions first. Returns up to 20 transactions per page.
- `get_transaction_info` — Read one in-app purchase transaction by identifier, decoded from the signed payload Apple returns.
- `look_up_order_id` — Look up the in-app purchase transactions behind an order ID from a customer's App Store receipt, to check that the order is genuine and belongs to your app. Apple serves this endpoint only in the production environment, so it fails on a sandbox connection. [write]
- `request_test_notification` — Ask the App Store to send a TEST notification to the App Store Server Notifications URL configured for your app, and get back the token that identifies the attempt. Fails when no notification URL is configured for the selected environment.
- `send_consumption_information` — Send consumption information for an in-app purchase after a CONSUMPTION_REQUEST notification, so the App Store can decide on the customer's refund request. Apple expects an answer within 12 hours of the notification. Use this for App Store in-app purchases that do not go through the Advanced Commerce API. [write]
- `send_consumption_information_v1` — Send the version 1 consumption information for an in-app purchase after a CONSUMPTION_REQUEST notification. Apple documents this shape for purchases made through the Advanced Commerce API; use send_consumption_information for ordinary App Store in-app purchases. [write]
- `set_app_account_token` — Set or replace the app account token on a transaction, to associate a purchase made outside your app with a customer on your own service. Overwrites any token already set. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change App Store Server API state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — App Store Server API is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=app_store_server
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- App Store Server API homepage: https://developer.apple.com/documentation/appstoreserverapi

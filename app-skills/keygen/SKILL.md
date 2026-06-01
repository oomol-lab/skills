---
name: keygen
description: "Keygen (keygen.sh). Use this skill for ANY Keygen request — reading, creating, updating, and deleting data. Whenever a task involves Keygen, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Keygen"
  author: "OOMOL"
  version: "1.0.0"
  service: "keygen"
  categories: "Developer Tools, Security & Identity"
  homepage: "https://keygen.sh"
  icon: "https://static.oomol.com/logo/third-party/keygen.svg"
---

# Keygen

Operate **Keygen** through your OOMOL-connected account. This skill calls the `keygen` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Security & Identity. Exposes 76 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Keygen. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "keygen" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "keygen" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`activate_machine`](actions/activate_machine.md) — Activate a machine in the connected Keygen account.
- [`attach_license_entitlements`](actions/attach_license_entitlements.md) — Attach entitlements to a Keygen license.
- [`attach_license_users`](actions/attach_license_users.md) — Attach users to a Keygen license.
- [`attach_policy_entitlements`](actions/attach_policy_entitlements.md) — Attach entitlements to a Keygen policy.
- [`ban_user`](actions/ban_user.md) — Ban a Keygen user from authenticating.
- [`change_license_group`](actions/change_license_group.md) — Change the group assigned to a Keygen license.
- [`change_license_owner`](actions/change_license_owner.md) — Change the owner user for a Keygen license.
- [`change_license_policy`](actions/change_license_policy.md) — Move a Keygen license to another policy.
- [`change_machine_group`](actions/change_machine_group.md) — Change the group assigned to a Keygen machine.
- [`change_machine_owner`](actions/change_machine_owner.md) — Change the owner user for a Keygen machine.
- [`change_user_group`](actions/change_user_group.md) — Move a Keygen user to another group.
- [`check_in_license`](actions/check_in_license.md) — Check in a Keygen license for policies that require periodic license check-ins.
- [`create_component`](actions/create_component.md) — Create a machine component in the connected Keygen account.
- [`create_entitlement`](actions/create_entitlement.md) — Create an entitlement in the connected Keygen account.
- [`create_group`](actions/create_group.md) — Create a group in the connected Keygen account.
- [`create_license`](actions/create_license.md) — Create a license in the connected Keygen account.
- [`create_policy`](actions/create_policy.md) — Create a license policy in the connected Keygen account.
- [`create_process`](actions/create_process.md) — Create a tracked process in the connected Keygen account.
- [`create_product`](actions/create_product.md) — Create a product in the connected Keygen account.
- [`create_user`](actions/create_user.md) — Create a user in the connected Keygen account.
- [`deactivate_machine`](actions/deactivate_machine.md) — Deactivate a machine from the connected Keygen account.
- [`decrement_license_usage`](actions/decrement_license_usage.md) — Decrement metered usage for a Keygen license.
- [`delete_component`](actions/delete_component.md) — Delete a machine component from the connected Keygen account.
- [`delete_entitlement`](actions/delete_entitlement.md) — Delete an entitlement from the connected Keygen account.
- [`delete_group`](actions/delete_group.md) — Delete a group from the connected Keygen account.
- [`delete_license`](actions/delete_license.md) — Delete a license from the connected Keygen account.
- [`delete_policy`](actions/delete_policy.md) — Delete a license policy from the connected Keygen account.
- [`delete_process`](actions/delete_process.md) — Delete a tracked process from the connected Keygen account.
- [`delete_product`](actions/delete_product.md) — Delete a product from the connected Keygen account.
- [`delete_user`](actions/delete_user.md) — Delete a user from the connected Keygen account.
- [`detach_license_entitlements`](actions/detach_license_entitlements.md) — Detach entitlements from a Keygen license.
- [`detach_license_users`](actions/detach_license_users.md) — Detach users from a Keygen license.
- [`detach_policy_entitlements`](actions/detach_policy_entitlements.md) — Detach entitlements from a Keygen policy.
- [`increment_license_usage`](actions/increment_license_usage.md) — Increment metered usage for a Keygen license.
- [`list_components`](actions/list_components.md) — List machine components in the connected Keygen account.
- [`list_entitlements`](actions/list_entitlements.md) — List entitlements in the connected Keygen account.
- [`list_groups`](actions/list_groups.md) — List groups in the connected Keygen account.
- [`list_license_entitlements`](actions/list_license_entitlements.md) — List entitlements attached to a Keygen license.
- [`list_license_users`](actions/list_license_users.md) — List users attached to a Keygen license.
- [`list_licenses`](actions/list_licenses.md) — List licenses in the connected Keygen account.
- [`list_machines`](actions/list_machines.md) — List activated machines in the connected Keygen account.
- [`list_policies`](actions/list_policies.md) — List license policies in the connected Keygen account.
- [`list_policy_entitlements`](actions/list_policy_entitlements.md) — List entitlements attached to a Keygen policy.
- [`list_processes`](actions/list_processes.md) — List tracked processes in the connected Keygen account.
- [`list_products`](actions/list_products.md) — List products in the connected Keygen account.
- [`list_users`](actions/list_users.md) — List users in the connected Keygen account.
- [`ping_machine`](actions/ping_machine.md) — Ping a Keygen machine heartbeat.
- [`ping_process`](actions/ping_process.md) — Ping a Keygen process heartbeat.
- [`reinstate_license`](actions/reinstate_license.md) — Reinstate a suspended Keygen license.
- [`renew_license`](actions/renew_license.md) — Renew a Keygen license according to its policy.
- [`reset_license_usage`](actions/reset_license_usage.md) — Reset metered usage for a Keygen license.
- [`reset_machine_heartbeat`](actions/reset_machine_heartbeat.md) — Reset a Keygen machine heartbeat.
- [`retrieve_component`](actions/retrieve_component.md) — Retrieve one machine component from the connected Keygen account.
- [`retrieve_entitlement`](actions/retrieve_entitlement.md) — Retrieve one entitlement from the connected Keygen account.
- [`retrieve_group`](actions/retrieve_group.md) — Retrieve one group from the connected Keygen account.
- [`retrieve_license`](actions/retrieve_license.md) — Retrieve one license from the connected Keygen account.
- [`retrieve_machine`](actions/retrieve_machine.md) — Retrieve one activated machine from the connected Keygen account.
- [`retrieve_policy`](actions/retrieve_policy.md) — Retrieve one license policy from the connected Keygen account.
- [`retrieve_process`](actions/retrieve_process.md) — Retrieve one tracked process from the connected Keygen account.
- [`retrieve_product`](actions/retrieve_product.md) — Retrieve one product from the connected Keygen account.
- [`retrieve_user`](actions/retrieve_user.md) — Retrieve one user from the connected Keygen account.
- [`revoke_license`](actions/revoke_license.md) — Revoke a Keygen license through the official revoke action.
- [`suspend_license`](actions/suspend_license.md) — Suspend a Keygen license so it can no longer authenticate with the API.
- [`unban_user`](actions/unban_user.md) — Unban a Keygen user so they can authenticate again.
- [`update_component`](actions/update_component.md) — Update a machine component in the connected Keygen account.
- [`update_entitlement`](actions/update_entitlement.md) — Update an entitlement in the connected Keygen account.
- [`update_group`](actions/update_group.md) — Update a group in the connected Keygen account.
- [`update_license`](actions/update_license.md) — Update a license in the connected Keygen account.
- [`update_machine`](actions/update_machine.md) — Update an activated machine in the connected Keygen account.
- [`update_policy`](actions/update_policy.md) — Update a license policy in the connected Keygen account.
- [`update_process`](actions/update_process.md) — Update a tracked process in the connected Keygen account.
- [`update_product`](actions/update_product.md) — Update a product in the connected Keygen account.
- [`update_user`](actions/update_user.md) — Update a user in the connected Keygen account.
- [`validate_license_by_id`](actions/validate_license_by_id.md) — Validate a Keygen license by its resource ID and optional validation scope.
- [`validate_license_key`](actions/validate_license_key.md) — Validate a Keygen license key and optional validation scope.
- [`whoami`](actions/whoami.md) — Fetch the Keygen profile associated with the connected API token.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Keygen state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Keygen is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=keygen
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Keygen homepage: https://keygen.sh

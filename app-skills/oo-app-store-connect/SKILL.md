---
name: oo-app-store-connect
description: "App Store Connect (appstoreconnect.apple.com). Use this skill for ANY App Store Connect request — reading, creating, updating, and deleting data. Whenever a task involves App Store Connect, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "App Store Connect"
  author: "OOMOL"
  version: "1.0.0"
  services: ["app_store_connect"]
---

# App Store Connect

Operate **App Store Connect** through your OOMOL-connected account. This skill calls the `app_store_connect` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected App Store Connect. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "app_store_connect" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "app_store_connect" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `add_beta_testers_to_group` — Add existing TestFlight testers to one group so they receive the builds that group can install. [write]
- `add_build_to_beta_groups` — Make one build available to TestFlight groups so their testers can install it. [write]
- `create_beta_group` — Create a TestFlight group for an app, optionally enabling its public invitation link. [write]
- `create_beta_tester` — Invite a TestFlight tester by email. App Store Connect only creates a tester that is assigned to something, so pass at least one of betaGroupIds or buildIds. [write]
- `delete_beta_group` — Delete a TestFlight group. Testers who only belonged to that group lose access to its builds. [destructive]
- `delete_beta_tester` — Remove a TestFlight tester from the team, revoking their access to every build and group. [destructive]
- `delete_customer_review_response` — Remove a published developer response from an App Store review. [destructive]
- `get_app` — Read one app record by its App Store Connect identifier.
- `get_app_store_version` — Read one App Store version by its App Store Connect identifier.
- `get_build` — Read one build together with its prerelease version, its TestFlight review submission, and the app it belongs to.
- `get_customer_review` — Read one App Store review together with the developer response published for it.
- `get_user` — Read one App Store Connect team member by identifier.
- `list_app_store_versions` — List the App Store versions of one app, with the review and release state of each version.
- `list_apps` — List the apps the API key can see, optionally filtered by bundle identifier, name, or SKU.
- `list_beta_groups` — List the TestFlight groups of one app, including the public invitation link of each group.
- `list_beta_testers` — List TestFlight testers, optionally narrowed to one app, group, or build.
- `list_builds` — List builds uploaded for one app, with the prerelease version each build belongs to. Filter by version, platform, processing state, or TestFlight review state.
- `list_customer_reviews` — List the App Store reviews of one app together with the developer response published for each review.
- `list_pre_release_versions` — List the prerelease versions of one app, which group its TestFlight builds by marketing version.
- `list_users` — List the members of the App Store Connect team, with the roles granted to each of them.
- `remove_beta_testers_from_group` — Remove testers from one TestFlight group. The testers stay on the team and keep access through their other groups. [destructive]
- `respond_to_customer_review` — Publish a developer response to an App Store review. App Store Connect treats this as an upsert: an existing response for the same review is replaced, and publication is asynchronous.
- `submit_build_for_beta_review` — Submit a build for TestFlight beta review, which external groups require before they can install it. [write]
- `update_build_test_notes` — Set the "What to Test" notes a build shows testers in one locale. Updates the existing notes for that locale, or creates them when the locale has none yet. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change App Store Connect state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — App Store Connect is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=app_store_connect
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- App Store Connect homepage: https://appstoreconnect.apple.com/

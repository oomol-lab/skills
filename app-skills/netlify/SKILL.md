---
name: netlify
description: "Netlify (netlify.com). Use this skill for ANY Netlify request — reading, creating, updating, and deleting data. Whenever a task involves Netlify, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Netlify"
  author: "OOMOL"
  version: "1.0.0"
  service: "netlify"
  categories: "Developer Tools"
  homepage: "https://www.netlify.com"
  icon: "https://static.oomol.com/logo/third-party/netlify.svg"
---

# Netlify

Operate **Netlify** through your OOMOL-connected account. This skill calls the `netlify` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 19 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Netlify. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "netlify" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "netlify" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_deploy`](actions/cancel_deploy.md) — Cancel one Netlify deploy by deploy ID.
- [`create_site_build`](actions/create_site_build.md) — Start a Netlify build for one site without uploading binary files.
- [`create_site_deploy_from_zip_url`](actions/create_site_deploy_from_zip_url.md) — Create a Netlify site deploy by downloading a public zip file URL and uploading it to Netlify.
- [`delete_submission`](actions/delete_submission.md) — Delete one Netlify form submission by submission ID.
- [`get_account`](actions/get_account.md) — Retrieve one Netlify account membership, including billing and capability fields returned by Netlify.
- [`get_build`](actions/get_build.md) — Retrieve one Netlify build by build ID.
- [`get_current_user`](actions/get_current_user.md) — Retrieve the Netlify user associated with the connected credential.
- [`get_deploy`](actions/get_deploy.md) — Retrieve one Netlify deploy by deploy ID.
- [`get_site`](actions/get_site.md) — Retrieve one Netlify site by site ID or name.
- [`list_accounts`](actions/list_accounts.md) — List Netlify accounts accessible to the connected credential.
- [`list_site_deploys`](actions/list_site_deploys.md) — List deploys for one Netlify site.
- [`list_site_forms`](actions/list_site_forms.md) — List forms detected for one Netlify site.
- [`list_sites`](actions/list_sites.md) — List Netlify sites accessible to the connected credential.
- [`list_submissions`](actions/list_submissions.md) — List Netlify form submissions by site or by form.
- [`lock_deploy`](actions/lock_deploy.md) — Lock one Netlify deploy by deploy ID.
- [`notify_build_start`](actions/notify_build_start.md) — Notify Netlify that one build has started.
- [`unlock_deploy`](actions/unlock_deploy.md) — Unlock one Netlify deploy by deploy ID.
- [`upload_deploy_file_from_url`](actions/upload_deploy_file_from_url.md) — Upload one file into an existing Netlify deploy by downloading a public file URL first.
- [`upload_deploy_function_from_zip_url`](actions/upload_deploy_function_from_zip_url.md) — Upload one Netlify function bundle into an existing deploy by downloading a public zip file URL first.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Netlify state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Netlify is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=netlify
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Netlify homepage: https://www.netlify.com

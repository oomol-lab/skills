---
name: oo-agent-mail
description: "AgentMail (agentmail.to). Use this skill for ANY AgentMail request — reading, creating, updating, and deleting data. Whenever a task involves AgentMail, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AgentMail"
  author: "OOMOL"
  version: "1.0.1"
  service: "agent_mail"
  categories: "Communication, Productivity"
  homepage: "https://agentmail.to"
  icon: "https://static.oomol.com/logo/third-party/agent_mail.svg"
---

# AgentMail

Operate **AgentMail** through your OOMOL-connected account. This skill calls the `agent_mail` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 103 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AgentMail. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "agent_mail" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "agent_mail" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`batch_get_messages`](actions/batch_get_messages.md) — Fetch multiple messages from a specific AgentMail inbox by message ID.
- [`create_api_key`](actions/create_api_key.md) — Create an AgentMail API key.
- [`create_domain`](actions/create_domain.md) — Create an AgentMail domain.
- [`create_draft`](actions/create_draft.md) — Create a draft in a specific AgentMail inbox.
- [`create_inbox`](actions/create_inbox.md) — Create a new AgentMail inbox.
- [`create_inbox_api_key`](actions/create_inbox_api_key.md) — Create an API key scoped to a specific AgentMail inbox.
- [`create_inbox_list_entry`](actions/create_inbox_list_entry.md) — Create an allow or block list entry scoped to a specific AgentMail inbox.
- [`create_list_entry`](actions/create_list_entry.md) — Create a global AgentMail allow or block list entry.
- [`create_pod`](actions/create_pod.md) — Create an AgentMail pod.
- [`create_pod_api_key`](actions/create_pod_api_key.md) — Create an API key scoped to a specific AgentMail pod.
- [`create_pod_domain`](actions/create_pod_domain.md) — Create an AgentMail domain scoped to a pod.
- [`create_pod_inbox`](actions/create_pod_inbox.md) — Create an AgentMail inbox scoped to a pod.
- [`create_pod_list_entry`](actions/create_pod_list_entry.md) — Create an AgentMail allow or block list entry scoped to a pod.
- [`create_webhook`](actions/create_webhook.md) — Create an AgentMail webhook.
- [`delete_api_key`](actions/delete_api_key.md) — Delete an AgentMail API key.
- [`delete_domain`](actions/delete_domain.md) — Delete an AgentMail domain.
- [`delete_draft`](actions/delete_draft.md) — Delete a draft from a specific AgentMail inbox.
- [`delete_inbox`](actions/delete_inbox.md) — Delete an AgentMail inbox.
- [`delete_inbox_api_key`](actions/delete_inbox_api_key.md) — Delete an API key scoped to a specific AgentMail inbox.
- [`delete_inbox_list_entry`](actions/delete_inbox_list_entry.md) — Delete an allow or block list entry scoped to a specific AgentMail inbox.
- [`delete_inbox_thread`](actions/delete_inbox_thread.md) — Delete a thread from a specific AgentMail inbox.
- [`delete_list_entry`](actions/delete_list_entry.md) — Delete a global AgentMail allow or block list entry.
- [`delete_message`](actions/delete_message.md) — Delete a message from a specific AgentMail inbox.
- [`delete_pod`](actions/delete_pod.md) — Delete an AgentMail pod.
- [`delete_pod_api_key`](actions/delete_pod_api_key.md) — Delete an API key scoped to a specific AgentMail pod.
- [`delete_pod_domain`](actions/delete_pod_domain.md) — Delete an AgentMail domain scoped to a pod.
- [`delete_pod_inbox`](actions/delete_pod_inbox.md) — Delete an AgentMail inbox scoped to a pod.
- [`delete_pod_list_entry`](actions/delete_pod_list_entry.md) — Delete an AgentMail allow or block list entry scoped to a pod.
- [`delete_pod_thread`](actions/delete_pod_thread.md) — Delete an AgentMail thread scoped to a pod.
- [`delete_thread`](actions/delete_thread.md) — Delete an AgentMail thread.
- [`delete_webhook`](actions/delete_webhook.md) — Delete an AgentMail webhook.
- [`forward_message`](actions/forward_message.md) — Forward a specific AgentMail message.
- [`get_domain`](actions/get_domain.md) — Get a single AgentMail domain.
- [`get_domain_zone_file`](actions/get_domain_zone_file.md) — Get the DNS zone file records needed for an AgentMail domain.
- [`get_draft`](actions/get_draft.md) — Get a draft from a specific AgentMail inbox.
- [`get_draft_attachment`](actions/get_draft_attachment.md) — Get metadata and download URL for an attachment on a specific AgentMail draft.
- [`get_global_draft`](actions/get_global_draft.md) — Get a single AgentMail draft across accessible inboxes.
- [`get_global_draft_attachment`](actions/get_global_draft_attachment.md) — Get metadata and download URL for an attachment on an AgentMail draft.
- [`get_inbox`](actions/get_inbox.md) — Get a single AgentMail inbox.
- [`get_inbox_list_entry`](actions/get_inbox_list_entry.md) — Get an allow or block list entry scoped to a specific AgentMail inbox.
- [`get_inbox_thread`](actions/get_inbox_thread.md) — Get a single thread from a specific AgentMail inbox.
- [`get_inbox_thread_attachment`](actions/get_inbox_thread_attachment.md) — Get metadata and download URL for an attachment in an AgentMail inbox thread.
- [`get_list_entry`](actions/get_list_entry.md) — Get a global AgentMail allow or block list entry.
- [`get_message`](actions/get_message.md) — Get a single message from a specific AgentMail inbox.
- [`get_message_attachment`](actions/get_message_attachment.md) — Get metadata and download URL for an attachment on a specific AgentMail message.
- [`get_organization`](actions/get_organization.md) — Get the AgentMail organization available to the current API key.
- [`get_pod`](actions/get_pod.md) — Get a single AgentMail pod.
- [`get_pod_domain`](actions/get_pod_domain.md) — Get a single AgentMail domain scoped to a pod.
- [`get_pod_domain_zone_file`](actions/get_pod_domain_zone_file.md) — Get the DNS zone file records needed for an AgentMail pod domain.
- [`get_pod_draft`](actions/get_pod_draft.md) — Get a single AgentMail draft scoped to a pod.
- [`get_pod_draft_attachment`](actions/get_pod_draft_attachment.md) — Get metadata and download URL for an attachment on an AgentMail pod draft.
- [`get_pod_inbox`](actions/get_pod_inbox.md) — Get a single AgentMail inbox scoped to a pod.
- [`get_pod_list_entry`](actions/get_pod_list_entry.md) — Get an AgentMail allow or block list entry scoped to a pod.
- [`get_pod_thread`](actions/get_pod_thread.md) — Get a single AgentMail thread scoped to a pod.
- [`get_pod_thread_attachment`](actions/get_pod_thread_attachment.md) — Get metadata and download URL for an attachment in an AgentMail pod thread.
- [`get_raw_message`](actions/get_raw_message.md) — Get a presigned download URL for the raw EML version of an AgentMail message.
- [`get_thread`](actions/get_thread.md) — Get a single AgentMail thread.
- [`get_thread_attachment`](actions/get_thread_attachment.md) — Get metadata and download URL for an attachment in an AgentMail thread.
- [`get_webhook`](actions/get_webhook.md) — Get a single AgentMail webhook.
- [`list_api_keys`](actions/list_api_keys.md) — List AgentMail API keys.
- [`list_domains`](actions/list_domains.md) — List AgentMail domains.
- [`list_drafts`](actions/list_drafts.md) — List drafts from a specific AgentMail inbox.
- [`list_global_drafts`](actions/list_global_drafts.md) — List AgentMail drafts across accessible inboxes.
- [`list_inbox_api_keys`](actions/list_inbox_api_keys.md) — List API keys scoped to a specific AgentMail inbox.
- [`list_inbox_events`](actions/list_inbox_events.md) — List events scoped to a specific AgentMail inbox.
- [`list_inbox_list_entries`](actions/list_inbox_list_entries.md) — List allow or block entries scoped to a specific AgentMail inbox.
- [`list_inbox_threads`](actions/list_inbox_threads.md) — List threads in a specific AgentMail inbox.
- [`list_inboxes`](actions/list_inboxes.md) — List inboxes available to the current AgentMail API key.
- [`list_list_entries`](actions/list_list_entries.md) — List global AgentMail allow or block entries.
- [`list_messages`](actions/list_messages.md) — List messages from a specific AgentMail inbox.
- [`list_pod_api_keys`](actions/list_pod_api_keys.md) — List AgentMail API keys scoped to a pod.
- [`list_pod_domains`](actions/list_pod_domains.md) — List AgentMail domains scoped to a pod.
- [`list_pod_drafts`](actions/list_pod_drafts.md) — List AgentMail drafts scoped to a pod.
- [`list_pod_inboxes`](actions/list_pod_inboxes.md) — List AgentMail inboxes scoped to a pod.
- [`list_pod_list_entries`](actions/list_pod_list_entries.md) — List AgentMail allow or block entries scoped to a pod.
- [`list_pod_threads`](actions/list_pod_threads.md) — List AgentMail threads scoped to a pod.
- [`list_pods`](actions/list_pods.md) — List AgentMail pods.
- [`list_threads`](actions/list_threads.md) — List AgentMail threads across accessible inboxes.
- [`list_webhooks`](actions/list_webhooks.md) — List AgentMail webhooks.
- [`query_inbox_metrics`](actions/query_inbox_metrics.md) — Query AgentMail metrics scoped to a specific inbox.
- [`query_metrics`](actions/query_metrics.md) — Query AgentMail metrics across accessible resources.
- [`query_pod_metrics`](actions/query_pod_metrics.md) — Query AgentMail metrics scoped to a pod.
- [`reply_all_message`](actions/reply_all_message.md) — Reply to all recipients of a specific AgentMail message.
- [`reply_to_message`](actions/reply_to_message.md) — Reply to a specific AgentMail message.
- [`search_inbox_threads`](actions/search_inbox_threads.md) — Search threads in a specific AgentMail inbox.
- [`search_messages`](actions/search_messages.md) — Search messages in a specific AgentMail inbox.
- [`search_pod_threads`](actions/search_pod_threads.md) — Search AgentMail threads scoped to a pod.
- [`search_threads`](actions/search_threads.md) — Search AgentMail threads across accessible inboxes.
- [`send_draft`](actions/send_draft.md) — Send a specific AgentMail draft.
- [`send_message`](actions/send_message.md) — Send a message from a specific AgentMail inbox.
- [`update_domain`](actions/update_domain.md) — Update an AgentMail domain.
- [`update_draft`](actions/update_draft.md) — Update a draft in a specific AgentMail inbox.
- [`update_inbox`](actions/update_inbox.md) — Update an AgentMail inbox display name or metadata.
- [`update_inbox_thread`](actions/update_inbox_thread.md) — Update labels on a thread in a specific AgentMail inbox.
- [`update_message`](actions/update_message.md) — Update labels on a message in a specific AgentMail inbox.
- [`update_pod_domain`](actions/update_pod_domain.md) — Update an AgentMail domain scoped to a pod.
- [`update_pod_inbox`](actions/update_pod_inbox.md) — Update an AgentMail inbox scoped to a pod.
- [`update_pod_thread`](actions/update_pod_thread.md) — Update labels on an AgentMail thread scoped to a pod.
- [`update_thread`](actions/update_thread.md) — Update labels on an AgentMail thread.
- [`update_webhook`](actions/update_webhook.md) — Update an AgentMail webhook.
- [`verify_domain`](actions/verify_domain.md) — Ask AgentMail to verify a domain's DNS records.
- [`verify_pod_domain`](actions/verify_pod_domain.md) — Ask AgentMail to verify a pod domain's DNS records.
- [`who_am_i`](actions/who_am_i.md) — Get AgentMail identity information for the current API key.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change AgentMail state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AgentMail is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=agent_mail
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AgentMail homepage: https://agentmail.to

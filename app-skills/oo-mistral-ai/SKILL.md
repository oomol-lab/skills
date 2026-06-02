---
name: oo-mistral-ai
description: "Mistral AI (mistral.ai). Use this skill for ANY Mistral AI request — reading, creating, updating, and deleting data. Whenever a task involves Mistral AI, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Mistral AI"
  author: "OOMOL"
  version: "1.0.0"
  service: "mistral_ai"
  categories: "AI"
  homepage: "https://mistral.ai"
  icon: "https://static.oomol.com/logo/third-party/Mistral%20AI.svg"
---

# Mistral AI

Operate **Mistral AI** through your OOMOL-connected account. This skill calls the `mistral_ai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI. Exposes 54 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Mistral AI. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "mistral_ai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "mistral_ai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`append_to_conversation`](actions/append_to_conversation.md) — Appends a new message to an existing session and triggers a new completion.
- [`create_agent`](actions/create_agent.md) — Create a new Mistral Agent.
- [`create_agents_completion`](actions/create_agents_completion.md) — Call the Mistral agents completions interface to generate Agent responses.
- [`create_audio_transcription`](actions/create_audio_transcription.md) — Upload the audio file and call the Mistral transcoding interface.
- [`create_chat_completion`](actions/create_chat_completion.md) — Call the Mistral chat completions interface to generate chat responses.
- [`create_chat_moderation`](actions/create_chat_moderation.md) — Call the Mistral chat moderations interface to detect chat message security risks.
- [`create_embeddings`](actions/create_embeddings.md) — Call the Mistral embeddings interface to generate vectors.
- [`create_fim_completion`](actions/create_fim_completion.md) — Call the Mistral FIM completions interface to generate completion results.
- [`create_library`](actions/create_library.md) — Create a new Mistral library.
- [`create_library_share`](actions/create_library_share.md) — Creates or updates the shared access level for the specified library.
- [`create_moderation`](actions/create_moderation.md) — Call the Mistral moderations interface to detect text security risks.
- [`create_ocr`](actions/create_ocr.md) — Call the Mistral OCR interface to identify text and layout in the document.
- [`create_or_update_agent_alias`](actions/create_or_update_agent_alias.md) — Create or update an Agent version alias.
- [`delete_agent`](actions/delete_agent.md) — Delete the specified Agent.
- [`delete_conversation`](actions/delete_conversation.md) — Delete the specified session.
- [`delete_file`](actions/delete_file.md) — Delete the specified file.
- [`delete_library`](actions/delete_library.md) — Delete the specified library.
- [`delete_library_document`](actions/delete_library_document.md) — Delete the specified library document.
- [`delete_library_share`](actions/delete_library_share.md) — Removes the shared access level for the specified library.
- [`download_file`](actions/download_file.md) — Download the file contents and return the accessible download address via fileTransit.
- [`get_agent`](actions/get_agent.md) — Get a single Agent by Agent ID, optionally specifying agent_version.
- [`get_agent_version`](actions/get_agent_version.md) — Get version details of the specified Agent.
- [`get_conversation`](actions/get_conversation.md) — Get metadata for a single session by session ID.
- [`get_conversation_history`](actions/get_conversation_history.md) — Get all history entries in the session.
- [`get_conversation_messages`](actions/get_conversation_messages.md) — Get all message entries in the session.
- [`get_document_extracted_text_url`](actions/get_document_extracted_text_url.md) — Get a temporary signed link to a text file extracted from library document.
- [`get_document_signed_url`](actions/get_document_signed_url.md) — Get a temporary signed link to the library document's original file.
- [`get_document_status`](actions/get_document_status.md) — Get the processing status of library document.
- [`get_document_text_content`](actions/get_document_text_content.md) — Get the extracted text content of the library document.
- [`get_file_signed_url`](actions/get_file_signed_url.md) — Get the temporary signature download link for the file.
- [`get_fine_tuning_jobs`](actions/get_fine_tuning_jobs.md) — List fine-tuning jobs, with paging and filtering conditions.
- [`get_library`](actions/get_library.md) — Get individual library details by library ID.
- [`get_library_document`](actions/get_library_document.md) — Get details of a single library document.
- [`get_model`](actions/get_model.md) — Get details of a single Mistral model by model ID.
- [`list_agent_aliases`](actions/list_agent_aliases.md) — Lists all version aliases for the specified Agent.
- [`list_agent_versions`](actions/list_agent_versions.md) — Lists all versions of the specified Agent.
- [`list_agents`](actions/list_agents.md) — List all Agents, optionally with pagination, name, source or metadata filtering parameters.
- [`list_batch_jobs`](actions/list_batch_jobs.md) — List batch jobs, with paging and filtering conditions.
- [`list_conversations`](actions/list_conversations.md) — List sessions under the current organization, with pagination and metadata filtering parameters.
- [`list_files`](actions/list_files.md) — List all files under the current organization.
- [`list_libraries`](actions/list_libraries.md) — List all libraries under the current organization.
- [`list_library_documents`](actions/list_library_documents.md) — List all documents under the specified library.
- [`list_library_shares`](actions/list_library_shares.md) — List shared access records for the specified library.
- [`list_models`](actions/list_models.md) — List all Mistral models accessible by the current API Key.
- [`reprocess_document`](actions/reprocess_document.md) — Reprocess the specified library document.
- [`restart_conversation`](actions/restart_conversation.md) — Restarts the session from some historical point in the session and generates a new subsequent response.
- [`retrieve_file`](actions/retrieve_file.md) — Get file metadata by file ID.
- [`start_conversation`](actions/start_conversation.md) — Create a new session and immediately append the message or tool call context.
- [`update_agent`](actions/update_agent.md) — Update the Agent configuration and create a new version.
- [`update_agent_version`](actions/update_agent_version.md) — Switch the current version of the Agent.
- [`update_library`](actions/update_library.md) — Updates the properties of the specified library.
- [`update_library_document`](actions/update_library_document.md) — Updates the properties of the specified library document.
- [`upload_file`](actions/upload_file.md) — Upload files to Mistral for fine-tuning, batch or OCR.
- [`upload_library_document`](actions/upload_library_document.md) — Uploads a new document to the specified library.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Mistral AI state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Mistral AI is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=mistral_ai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Mistral AI homepage: https://mistral.ai

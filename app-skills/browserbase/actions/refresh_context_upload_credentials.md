# Browserbase · `refresh_context_upload_credentials`

Refresh the Browserbase upload credentials for an existing context so a new encrypted archive can be uploaded.

- **Service**: `browserbase`
- **Action**: `refresh_context_upload_credentials`
- **Action id**: `browserbase.refresh_context_upload_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "refresh_context_upload_credentials"
```

## Run

```bash
oo connector run "browserbase" --action "refresh_context_upload_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Browserbase state. Confirm the exact payload and intended effect with the user before running.

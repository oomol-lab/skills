# Ragie · `create_oauth_redirect_url`

Create the Ragie embedded OAuth redirect URL for a connection source type such as Google Drive or Notion.

- **Service**: `ragie`
- **Action**: `create_oauth_redirect_url`
- **Action id**: `ragie.create_oauth_redirect_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "create_oauth_redirect_url"
```

## Run

```bash
oo connector run "ragie" --action "create_oauth_redirect_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.

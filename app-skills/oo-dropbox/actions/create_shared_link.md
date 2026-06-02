# Dropbox · `create_shared_link`

Create one Dropbox shared link with optional custom settings.

- **Service**: `dropbox`
- **Action**: `create_shared_link`
- **Action id**: `dropbox.create_shared_link`
- **Required scopes**: sharing.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "create_shared_link"
```

## Run

```bash
oo connector run "dropbox" --action "create_shared_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dropbox state. Confirm the exact payload and intended effect with the user before running.

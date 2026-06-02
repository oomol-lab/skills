# Gist · `update_gist`

Update a GitHub gist description or files.

- **Service**: `gist`
- **Action**: `update_gist`
- **Action id**: `gist.update_gist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "update_gist"
```

## Run

```bash
oo connector run "gist" --action "update_gist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gist state. Confirm the exact payload and intended effect with the user before running.

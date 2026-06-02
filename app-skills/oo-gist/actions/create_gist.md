# Gist · `create_gist`

Create a new GitHub gist.

- **Service**: `gist`
- **Action**: `create_gist`
- **Action id**: `gist.create_gist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "create_gist"
```

## Run

```bash
oo connector run "gist" --action "create_gist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gist state. Confirm the exact payload and intended effect with the user before running.

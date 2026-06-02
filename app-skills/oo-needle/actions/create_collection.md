# Needle · `create_collection`

Create a Needle collection and optionally attach existing Needle file IDs.

- **Service**: `needle`
- **Action**: `create_collection`
- **Action id**: `needle.create_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "create_collection"
```

## Run

```bash
oo connector run "needle" --action "create_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Needle state. Confirm the exact payload and intended effect with the user before running.

# Grist · `update_records`

Update one or more existing Grist records by row ID.

- **Service**: `grist`
- **Action**: `update_records`
- **Action id**: `grist.update_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "update_records"
```

## Run

```bash
oo connector run "grist" --action "update_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Grist state. Confirm the exact payload and intended effect with the user before running.

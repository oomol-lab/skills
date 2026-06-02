# Knack · `update_record`

Update one Knack record by sending a partial JSON payload for the selected object and record ID.

- **Service**: `knack`
- **Action**: `update_record`
- **Action id**: `knack.update_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "knack" --action "update_record"
```

## Run

```bash
oo connector run "knack" --action "update_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Knack state. Confirm the exact payload and intended effect with the user before running.

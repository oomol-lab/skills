# Knack · `create_record`

Create one Knack record in the selected object with a raw JSON record payload.

- **Service**: `knack`
- **Action**: `create_record`
- **Action id**: `knack.create_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "knack" --action "create_record"
```

## Run

```bash
oo connector run "knack" --action "create_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Knack state. Confirm the exact payload and intended effect with the user before running.

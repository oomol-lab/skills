# Dovetail · `update_data`

Update the title or fields of a Dovetail data record.

- **Service**: `dovetail`
- **Action**: `update_data`
- **Action id**: `dovetail.update_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dovetail" --action "update_data"
```

## Run

```bash
oo connector run "dovetail" --action "update_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dovetail state. Confirm the exact payload and intended effect with the user before running.

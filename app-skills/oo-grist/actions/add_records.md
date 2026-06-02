# Grist · `add_records`

Add one or more records to a Grist table.

- **Service**: `grist`
- **Action**: `add_records`
- **Action id**: `grist.add_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "add_records"
```

## Run

```bash
oo connector run "grist" --action "add_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Grist state. Confirm the exact payload and intended effect with the user before running.

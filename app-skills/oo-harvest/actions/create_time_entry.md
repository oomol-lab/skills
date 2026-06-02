# Harvest · `create_time_entry`

Create a new Harvest time entry.

- **Service**: `harvest`
- **Action**: `create_time_entry`
- **Action id**: `harvest.create_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "create_time_entry"
```

## Run

```bash
oo connector run "harvest" --action "create_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Harvest state. Confirm the exact payload and intended effect with the user before running.

# Harvest · `delete_time_entry`

Delete a Harvest time entry by ID.

- **Service**: `harvest`
- **Action**: `delete_time_entry`
- **Action id**: `harvest.delete_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "delete_time_entry"
```

## Run

```bash
oo connector run "harvest" --action "delete_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Harvest data. Always confirm the target and get explicit user approval before running.

# Ninox · `delete_records`

Delete multiple Ninox records from the same table.

- **Service**: `ninox`
- **Action**: `delete_records`
- **Action id**: `ninox.delete_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "delete_records"
```

## Run

```bash
oo connector run "ninox" --action "delete_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Ninox data. Always confirm the target and get explicit user approval before running.

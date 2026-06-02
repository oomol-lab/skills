# Ninox · `delete_record`

Delete one Ninox record by record ID.

- **Service**: `ninox`
- **Action**: `delete_record`
- **Action id**: `ninox.delete_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "delete_record"
```

## Run

```bash
oo connector run "ninox" --action "delete_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Ninox data. Always confirm the target and get explicit user approval before running.

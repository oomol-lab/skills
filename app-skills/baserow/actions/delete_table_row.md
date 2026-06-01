# Baserow · `delete_table_row`

Delete one Baserow row by row ID.

- **Service**: `baserow`
- **Action**: `delete_table_row`
- **Action id**: `baserow.delete_table_row`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "baserow" --action "delete_table_row"
```

## Run

```bash
oo connector run "baserow" --action "delete_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Baserow data. Always confirm the target and get explicit user approval before running.

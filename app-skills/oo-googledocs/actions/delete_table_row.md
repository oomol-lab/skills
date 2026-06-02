# Google Docs · `delete_table_row`

Delete a table row from a Google Docs document.

- **Service**: `googledocs`
- **Action**: `delete_table_row`
- **Action id**: `googledocs.delete_table_row`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_table_row"
```

## Run

```bash
oo connector run "googledocs" --action "delete_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.

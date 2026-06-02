# Google Docs · `delete_table_column`

Delete one or more table columns from a Google Docs document.

- **Service**: `googledocs`
- **Action**: `delete_table_column`
- **Action id**: `googledocs.delete_table_column`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_table_column"
```

## Run

```bash
oo connector run "googledocs" --action "delete_table_column" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.

# Google Sheets · `delete_dimension`

Delete rows or columns through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `delete_dimension`
- **Action id**: `googlesheets.delete_dimension`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "delete_dimension"
```

## Run

```bash
oo connector run "googlesheets" --action "delete_dimension" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Sheets data. Always confirm the target and get explicit user approval before running.

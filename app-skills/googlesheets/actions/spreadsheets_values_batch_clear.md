# Google Sheets · `spreadsheets_values_batch_clear`

Clear multiple spreadsheet value ranges through values.batchClear and return cleared ranges only.

- **Service**: `googlesheets`
- **Action**: `spreadsheets_values_batch_clear`
- **Action id**: `googlesheets.spreadsheets_values_batch_clear`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "spreadsheets_values_batch_clear"
```

## Run

```bash
oo connector run "googlesheets" --action "spreadsheets_values_batch_clear" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Sheets data. Always confirm the target and get explicit user approval before running.

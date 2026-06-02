# Google Sheets · `spreadsheets_values_append`

Append values through values.append and flatten the nested updates payload into stable top-level fields.

- **Service**: `googlesheets`
- **Action**: `spreadsheets_values_append`
- **Action id**: `googlesheets.spreadsheets_values_append`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "spreadsheets_values_append"
```

## Run

```bash
oo connector run "googlesheets" --action "spreadsheets_values_append" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

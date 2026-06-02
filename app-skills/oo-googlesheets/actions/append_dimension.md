# Google Sheets · `append_dimension`

Append rows or columns through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `append_dimension`
- **Action id**: `googlesheets.append_dimension`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "append_dimension"
```

## Run

```bash
oo connector run "googlesheets" --action "append_dimension" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Google Sheets · `batch_get`

Read multiple spreadsheet ranges through values:batchGet and return stable valueRanges output.

- **Service**: `googlesheets`
- **Action**: `batch_get`
- **Action id**: `googlesheets.batch_get`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "batch_get"
```

## Run

```bash
oo connector run "googlesheets" --action "batch_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

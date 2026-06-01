# Google Sheets · `values_get`

Read a single spreadsheet value range and return a stable ValueRange without a wrapper envelope.

- **Service**: `googlesheets`
- **Action**: `values_get`
- **Action id**: `googlesheets.values_get`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "values_get"
```

## Run

```bash
oo connector run "googlesheets" --action "values_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

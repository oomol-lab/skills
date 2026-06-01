# Google Sheets · `insert_dimension`

Insert rows or columns through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `insert_dimension`
- **Action id**: `googlesheets.insert_dimension`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "insert_dimension"
```

## Run

```bash
oo connector run "googlesheets" --action "insert_dimension" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

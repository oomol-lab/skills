# Google Sheets · `update_spreadsheet_properties`

Update spreadsheet-level properties through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `update_spreadsheet_properties`
- **Action id**: `googlesheets.update_spreadsheet_properties`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "update_spreadsheet_properties"
```

## Run

```bash
oo connector run "googlesheets" --action "update_spreadsheet_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

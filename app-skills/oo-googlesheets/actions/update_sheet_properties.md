# Google Sheets · `update_sheet_properties`

Update a sheet's properties through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `update_sheet_properties`
- **Action id**: `googlesheets.update_sheet_properties`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "update_sheet_properties"
```

## Run

```bash
oo connector run "googlesheets" --action "update_sheet_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

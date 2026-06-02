# Google Sheets · `create_google_sheet1`

Create a Google Sheets spreadsheet and return stable spreadsheet metadata for the new file.

- **Service**: `googlesheets`
- **Action**: `create_google_sheet1`
- **Action id**: `googlesheets.create_google_sheet1`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "create_google_sheet1"
```

## Run

```bash
oo connector run "googlesheets" --action "create_google_sheet1" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

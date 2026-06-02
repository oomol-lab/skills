# Google Sheets · `add_sheet`

Add a new sheet through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `add_sheet`
- **Action id**: `googlesheets.add_sheet`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "add_sheet"
```

## Run

```bash
oo connector run "googlesheets" --action "add_sheet" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

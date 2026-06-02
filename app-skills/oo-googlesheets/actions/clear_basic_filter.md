# Google Sheets · `clear_basic_filter`

Clear a basic filter through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `clear_basic_filter`
- **Action id**: `googlesheets.clear_basic_filter`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "clear_basic_filter"
```

## Run

```bash
oo connector run "googlesheets" --action "clear_basic_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Sheets data. Always confirm the target and get explicit user approval before running.

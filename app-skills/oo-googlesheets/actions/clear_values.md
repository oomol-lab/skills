# Google Sheets · `clear_values`

Clear a single spreadsheet value range through values.clear and return the cleared A1 range.

- **Service**: `googlesheets`
- **Action**: `clear_values`
- **Action id**: `googlesheets.clear_values`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "clear_values"
```

## Run

```bash
oo connector run "googlesheets" --action "clear_values" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Sheets data. Always confirm the target and get explicit user approval before running.

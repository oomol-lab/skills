# Google Sheets · `values_update`

Write a single spreadsheet value range through values.update and return stable update counters.

- **Service**: `googlesheets`
- **Action**: `values_update`
- **Action id**: `googlesheets.values_update`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "values_update"
```

## Run

```bash
oo connector run "googlesheets" --action "values_update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

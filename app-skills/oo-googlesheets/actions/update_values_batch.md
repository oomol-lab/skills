# Google Sheets · `update_values_batch`

Write multiple spreadsheet value ranges through values.batchUpdate and return stable aggregate counters.

- **Service**: `googlesheets`
- **Action**: `update_values_batch`
- **Action id**: `googlesheets.update_values_batch`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "update_values_batch"
```

## Run

```bash
oo connector run "googlesheets" --action "update_values_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

# Google Sheets · `set_data_validation_rule`

Set or clear data validation through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `set_data_validation_rule`
- **Action id**: `googlesheets.set_data_validation_rule`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "set_data_validation_rule"
```

## Run

```bash
oo connector run "googlesheets" --action "set_data_validation_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.

# Google Sheets · `get_data_validation_rules`

Read spreadsheet data validation rules from the minimum necessary sheet ranges and return flattened rule entries.

- **Service**: `googlesheets`
- **Action**: `get_data_validation_rules`
- **Action id**: `googlesheets.get_data_validation_rules`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "get_data_validation_rules"
```

## Run

```bash
oo connector run "googlesheets" --action "get_data_validation_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

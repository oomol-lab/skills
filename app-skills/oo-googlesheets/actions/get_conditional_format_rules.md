# Google Sheets · `get_conditional_format_rules`

Read spreadsheet conditional formatting rules and project them into a stable per-sheet structure.

- **Service**: `googlesheets`
- **Action**: `get_conditional_format_rules`
- **Action id**: `googlesheets.get_conditional_format_rules`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "get_conditional_format_rules"
```

## Run

```bash
oo connector run "googlesheets" --action "get_conditional_format_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

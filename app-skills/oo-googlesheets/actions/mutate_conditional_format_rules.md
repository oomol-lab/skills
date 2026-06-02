# Google Sheets · `mutate_conditional_format_rules`

Mutate conditional format rules through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `mutate_conditional_format_rules`
- **Action id**: `googlesheets.mutate_conditional_format_rules`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "mutate_conditional_format_rules"
```

## Run

```bash
oo connector run "googlesheets" --action "mutate_conditional_format_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

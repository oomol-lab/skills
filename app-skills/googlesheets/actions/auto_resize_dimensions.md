# Google Sheets · `auto_resize_dimensions`

Auto-resize rows or columns through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `auto_resize_dimensions`
- **Action id**: `googlesheets.auto_resize_dimensions`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "auto_resize_dimensions"
```

## Run

```bash
oo connector run "googlesheets" --action "auto_resize_dimensions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

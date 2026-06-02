# Excel · `search_files`

Search workbook files in the current OneDrive drive and return matching drive items.

- **Service**: `excel`
- **Action**: `search_files`
- **Action id**: `excel.search_files`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "search_files"
```

## Run

```bash
oo connector run "excel" --action "search_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

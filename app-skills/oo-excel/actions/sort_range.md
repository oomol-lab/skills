# Excel · `sort_range`

Apply a Microsoft Graph sort definition to one worksheet range.

- **Service**: `excel`
- **Action**: `sort_range`
- **Action id**: `excel.sort_range`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "sort_range"
```

## Run

```bash
oo connector run "excel" --action "sort_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

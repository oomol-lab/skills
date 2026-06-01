# Excel · `get_range`

Read one worksheet range by A1-style address.

- **Service**: `excel`
- **Action**: `get_range`
- **Action id**: `excel.get_range`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "get_range"
```

## Run

```bash
oo connector run "excel" --action "get_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

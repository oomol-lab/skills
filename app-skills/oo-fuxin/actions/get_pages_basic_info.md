# Foxit Cloud API · `get_pages_basic_info`

Submit one PDF for page-size and rotation analysis in Foxit.

- **Service**: `fuxin`
- **Action**: `get_pages_basic_info`
- **Action id**: `fuxin.get_pages_basic_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "get_pages_basic_info"
```

## Run

```bash
oo connector run "fuxin" --action "get_pages_basic_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# ReadMe · `get_category`

Get one ReadMe category by slug.

- **Service**: `readme`
- **Action**: `get_category`
- **Action id**: `readme.get_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_category"
```

## Run

```bash
oo connector run "readme" --action "get_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# ReadMe · `list_api_specifications`

List ReadMe API specification metadata with optional version and pagination.

- **Service**: `readme`
- **Action**: `list_api_specifications`
- **Action id**: `readme.list_api_specifications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "list_api_specifications"
```

## Run

```bash
oo connector run "readme" --action "list_api_specifications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Keyword.com · `list_keywords`

List Keyword.com keywords and ranking data for a project or group.

- **Service**: `keyword`
- **Action**: `list_keywords`
- **Action id**: `keyword.list_keywords`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keyword" --action "list_keywords"
```

## Run

```bash
oo connector run "keyword" --action "list_keywords" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

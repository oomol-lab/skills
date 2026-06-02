# ReadMe · `search_docs`

Search ReadMe docs by text query.

- **Service**: `readme`
- **Action**: `search_docs`
- **Action id**: `readme.search_docs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "search_docs"
```

## Run

```bash
oo connector run "readme" --action "search_docs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

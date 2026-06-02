# Needle · `search_collection`

Search a Needle collection for the most relevant retrieved content.

- **Service**: `needle`
- **Action**: `search_collection`
- **Action id**: `needle.search_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "search_collection"
```

## Run

```bash
oo connector run "needle" --action "search_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

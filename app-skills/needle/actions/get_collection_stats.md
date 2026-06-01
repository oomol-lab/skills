# Needle · `get_collection_stats`

Get indexing and storage statistics for a Needle collection.

- **Service**: `needle`
- **Action**: `get_collection_stats`
- **Action id**: `needle.get_collection_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "get_collection_stats"
```

## Run

```bash
oo connector run "needle" --action "get_collection_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

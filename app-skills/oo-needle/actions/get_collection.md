# Needle · `get_collection`

Get the details of a single Needle collection.

- **Service**: `needle`
- **Action**: `get_collection`
- **Action id**: `needle.get_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "get_collection"
```

## Run

```bash
oo connector run "needle" --action "get_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

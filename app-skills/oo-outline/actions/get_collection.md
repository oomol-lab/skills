# Outline · `get_collection`

Retrieve one Outline collection by its UUID.

- **Service**: `outline`
- **Action**: `get_collection`
- **Action id**: `outline.get_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outline" --action "get_collection"
```

## Run

```bash
oo connector run "outline" --action "get_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# OSS Insight · `list_collections`

List all OSS Insight repository collections.

- **Service**: `ossinsight`
- **Action**: `list_collections`
- **Action id**: `ossinsight.list_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_collections"
```

## Run

```bash
oo connector run "ossinsight" --action "list_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

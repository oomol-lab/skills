# OSS Insight · `list_hot_collections`

List hot OSS Insight collections with representative repositories.

- **Service**: `ossinsight`
- **Action**: `list_hot_collections`
- **Action id**: `ossinsight.list_hot_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_hot_collections"
```

## Run

```bash
oo connector run "ossinsight" --action "list_hot_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

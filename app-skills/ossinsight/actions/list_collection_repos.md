# OSS Insight · `list_collection_repos`

List repositories in an OSS Insight collection.

- **Service**: `ossinsight`
- **Action**: `list_collection_repos`
- **Action id**: `ossinsight.list_collection_repos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_collection_repos"
```

## Run

```bash
oo connector run "ossinsight" --action "list_collection_repos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

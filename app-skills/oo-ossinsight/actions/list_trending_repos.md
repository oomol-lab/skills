# OSS Insight · `list_trending_repos`

List recently trending GitHub repositories from OSS Insight.

- **Service**: `ossinsight`
- **Action**: `list_trending_repos`
- **Action id**: `ossinsight.list_trending_repos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_trending_repos"
```

## Run

```bash
oo connector run "ossinsight" --action "list_trending_repos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

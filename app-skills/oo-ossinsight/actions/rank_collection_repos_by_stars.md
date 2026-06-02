# OSS Insight · `rank_collection_repos_by_stars`

Rank repositories in an OSS Insight collection by star growth.

- **Service**: `ossinsight`
- **Action**: `rank_collection_repos_by_stars`
- **Action id**: `ossinsight.rank_collection_repos_by_stars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "rank_collection_repos_by_stars"
```

## Run

```bash
oo connector run "ossinsight" --action "rank_collection_repos_by_stars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

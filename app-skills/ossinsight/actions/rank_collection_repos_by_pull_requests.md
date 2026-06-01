# OSS Insight · `rank_collection_repos_by_pull_requests`

Rank repositories in an OSS Insight collection by pull request growth.

- **Service**: `ossinsight`
- **Action**: `rank_collection_repos_by_pull_requests`
- **Action id**: `ossinsight.rank_collection_repos_by_pull_requests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "rank_collection_repos_by_pull_requests"
```

## Run

```bash
oo connector run "ossinsight" --action "rank_collection_repos_by_pull_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

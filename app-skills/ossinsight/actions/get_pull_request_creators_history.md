# OSS Insight · `get_pull_request_creators_history`

Get historical pull request creator counts for a GitHub repository.

- **Service**: `ossinsight`
- **Action**: `get_pull_request_creators_history`
- **Action id**: `ossinsight.get_pull_request_creators_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "get_pull_request_creators_history"
```

## Run

```bash
oo connector run "ossinsight" --action "get_pull_request_creators_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

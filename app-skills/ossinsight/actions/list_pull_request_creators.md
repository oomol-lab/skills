# OSS Insight · `list_pull_request_creators`

List pull request creators for a GitHub repository.

- **Service**: `ossinsight`
- **Action**: `list_pull_request_creators`
- **Action id**: `ossinsight.list_pull_request_creators`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_pull_request_creators"
```

## Run

```bash
oo connector run "ossinsight" --action "list_pull_request_creators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# OSS Insight · `get_stargazers_history`

Get the historical stargazer count for a GitHub repository.

- **Service**: `ossinsight`
- **Action**: `get_stargazers_history`
- **Action id**: `ossinsight.get_stargazers_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "get_stargazers_history"
```

## Run

```bash
oo connector run "ossinsight" --action "get_stargazers_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

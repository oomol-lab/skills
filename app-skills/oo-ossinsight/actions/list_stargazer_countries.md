# OSS Insight · `list_stargazer_countries`

List countries or regions of stargazers for a GitHub repository.

- **Service**: `ossinsight`
- **Action**: `list_stargazer_countries`
- **Action id**: `ossinsight.list_stargazer_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_stargazer_countries"
```

## Run

```bash
oo connector run "ossinsight" --action "list_stargazer_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

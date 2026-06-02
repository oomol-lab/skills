# OSS Insight · `list_stargazer_organizations`

List organizations of stargazers for a GitHub repository.

- **Service**: `ossinsight`
- **Action**: `list_stargazer_organizations`
- **Action id**: `ossinsight.list_stargazer_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_stargazer_organizations"
```

## Run

```bash
oo connector run "ossinsight" --action "list_stargazer_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

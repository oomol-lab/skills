# OSS Insight · `list_issue_creator_countries`

List countries or regions of issue creators for a GitHub repository.

- **Service**: `ossinsight`
- **Action**: `list_issue_creator_countries`
- **Action id**: `ossinsight.list_issue_creator_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ossinsight" --action "list_issue_creator_countries"
```

## Run

```bash
oo connector run "ossinsight" --action "list_issue_creator_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

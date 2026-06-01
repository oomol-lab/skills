# CircleCI · `list_insights_summary`

Get CircleCI Insights summary metrics for an organization.

- **Service**: `circleci`
- **Action**: `list_insights_summary`
- **Action id**: `circleci.list_insights_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "list_insights_summary"
```

## Run

```bash
oo connector run "circleci" --action "list_insights_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

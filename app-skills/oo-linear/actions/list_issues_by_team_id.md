# Linear · `list_issues_by_team_id`

List Linear issues by team, and support cursor paging and whether to include archived issues.

- **Service**: `linear`
- **Action**: `list_issues_by_team_id`
- **Action id**: `linear.list_issues_by_team_id`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_issues_by_team_id"
```

## Run

```bash
oo connector run "linear" --action "list_issues_by_team_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

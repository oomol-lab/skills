# GitLab · `list_project_issues`

List issues for a GitLab project with common state, label, assignee, and search filters.

- **Service**: `gitlab`
- **Action**: `list_project_issues`
- **Action id**: `gitlab.list_project_issues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitlab" --action "list_project_issues"
```

## Run

```bash
oo connector run "gitlab" --action "list_project_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# CircleCI · `list_project_env_vars`

List masked CircleCI environment variables for a project.

- **Service**: `circleci`
- **Action**: `list_project_env_vars`
- **Action id**: `circleci.list_project_env_vars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "list_project_env_vars"
```

## Run

```bash
oo connector run "circleci" --action "list_project_env_vars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

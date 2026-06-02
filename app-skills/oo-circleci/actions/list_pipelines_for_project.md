# CircleCI · `list_pipelines_for_project`

List CircleCI pipelines for a project.

- **Service**: `circleci`
- **Action**: `list_pipelines_for_project`
- **Action id**: `circleci.list_pipelines_for_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "list_pipelines_for_project"
```

## Run

```bash
oo connector run "circleci" --action "list_pipelines_for_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

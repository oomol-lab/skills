# CircleCI · `get_project`

Get CircleCI project details by project slug.

- **Service**: `circleci`
- **Action**: `get_project`
- **Action id**: `circleci.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "get_project"
```

## Run

```bash
oo connector run "circleci" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Rollbar · `get_project`

Get one Rollbar project by project ID.

- **Service**: `rollbar`
- **Action**: `get_project`
- **Action id**: `rollbar.get_project`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "get_project"
```

## Run

```bash
oo connector run "rollbar" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

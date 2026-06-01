# Bugsnag · `list_project_errors`

List the errors reported on a Bugsnag project.

- **Service**: `bugsnag`
- **Action**: `list_project_errors`
- **Action id**: `bugsnag.list_project_errors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugsnag" --action "list_project_errors"
```

## Run

```bash
oo connector run "bugsnag" --action "list_project_errors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

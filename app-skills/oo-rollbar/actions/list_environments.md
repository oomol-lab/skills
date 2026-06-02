# Rollbar · `list_environments`

List environments in the connected Rollbar project.

- **Service**: `rollbar`
- **Action**: `list_environments`
- **Action id**: `rollbar.list_environments`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "list_environments"
```

## Run

```bash
oo connector run "rollbar" --action "list_environments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Rollbar · `get_deploy`

Get one Rollbar deploy by deploy ID.

- **Service**: `rollbar`
- **Action**: `get_deploy`
- **Action id**: `rollbar.get_deploy`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "get_deploy"
```

## Run

```bash
oo connector run "rollbar" --action "get_deploy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

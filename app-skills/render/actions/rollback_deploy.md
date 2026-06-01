# Render · `rollback_deploy`

Trigger a rollback to a previous deploy for a Render service.

- **Service**: `render`
- **Action**: `rollback_deploy`
- **Action id**: `render.rollback_deploy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "rollback_deploy"
```

## Run

```bash
oo connector run "render" --action "rollback_deploy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Render · `restart_service`

Restart a Render service.

- **Service**: `render`
- **Action**: `restart_service`
- **Action id**: `render.restart_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "restart_service"
```

## Run

```bash
oo connector run "render" --action "restart_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

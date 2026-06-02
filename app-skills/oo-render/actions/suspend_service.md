# Render · `suspend_service`

Suspend a Render service.

- **Service**: `render`
- **Action**: `suspend_service`
- **Action id**: `render.suspend_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "suspend_service"
```

## Run

```bash
oo connector run "render" --action "suspend_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

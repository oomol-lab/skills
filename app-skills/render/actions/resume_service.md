# Render · `resume_service`

Resume a suspended Render service.

- **Service**: `render`
- **Action**: `resume_service`
- **Action id**: `render.resume_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "resume_service"
```

## Run

```bash
oo connector run "render" --action "resume_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

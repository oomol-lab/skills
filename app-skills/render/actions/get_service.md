# Render · `get_service`

Get Render service details by service ID.

- **Service**: `render`
- **Action**: `get_service`
- **Action id**: `render.get_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "get_service"
```

## Run

```bash
oo connector run "render" --action "get_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Render · `list_deploys`

List recent Render deploys for a service.

- **Service**: `render`
- **Action**: `list_deploys`
- **Action id**: `render.list_deploys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "list_deploys"
```

## Run

```bash
oo connector run "render" --action "list_deploys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

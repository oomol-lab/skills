# Templated · `get_render`

Retrieve a single Templated render by its render ID.

- **Service**: `templated`
- **Action**: `get_render`
- **Action id**: `templated.get_render`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "get_render"
```

## Run

```bash
oo connector run "templated" --action "get_render" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

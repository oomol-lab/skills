# Pexels · `featured_collections`

Retrieve featured Pexels collections with pagination controls.

- **Service**: `pexels`
- **Action**: `featured_collections`
- **Action id**: `pexels.featured_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "featured_collections"
```

## Run

```bash
oo connector run "pexels" --action "featured_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

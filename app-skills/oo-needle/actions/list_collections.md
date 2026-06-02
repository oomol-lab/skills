# Needle · `list_collections`

List the Needle collections that the API key can access.

- **Service**: `needle`
- **Action**: `list_collections`
- **Action id**: `needle.list_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "list_collections"
```

## Run

```bash
oo connector run "needle" --action "list_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

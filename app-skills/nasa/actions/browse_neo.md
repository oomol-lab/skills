# NASA · `browse_neo`

Browse NASA's near-Earth object catalog with pagination support.

- **Service**: `nasa`
- **Action**: `browse_neo`
- **Action id**: `nasa.browse_neo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "browse_neo"
```

## Run

```bash
oo connector run "nasa" --action "browse_neo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

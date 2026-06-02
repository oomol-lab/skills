# Svix · `get_endpoint`

Fetch one Svix endpoint by application and endpoint identifier.

- **Service**: `svix`
- **Action**: `get_endpoint`
- **Action id**: `svix.get_endpoint`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "get_endpoint"
```

## Run

```bash
oo connector run "svix" --action "get_endpoint" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

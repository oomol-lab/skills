# Skyfire · `get_all_services`

List all approved and active services from the Skyfire marketplace directory.

- **Service**: `skyfire`
- **Action**: `get_all_services`
- **Action id**: `skyfire.get_all_services`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "skyfire" --action "get_all_services"
```

## Run

```bash
oo connector run "skyfire" --action "get_all_services" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

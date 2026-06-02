# Skyfire · `get_service`

Get one Skyfire marketplace service by its service ID.

- **Service**: `skyfire`
- **Action**: `get_service`
- **Action id**: `skyfire.get_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "skyfire" --action "get_service"
```

## Run

```bash
oo connector run "skyfire" --action "get_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

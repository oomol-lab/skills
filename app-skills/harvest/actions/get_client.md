# Harvest · `get_client`

Get a single Harvest client by ID.

- **Service**: `harvest`
- **Action**: `get_client`
- **Action id**: `harvest.get_client`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "get_client"
```

## Run

```bash
oo connector run "harvest" --action "get_client" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

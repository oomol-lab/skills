# timelink · `get_client`

Fetch one Timelink client by its identifier.

- **Service**: `timelink`
- **Action**: `get_client`
- **Action id**: `timelink.get_client`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_client"
```

## Run

```bash
oo connector run "timelink" --action "get_client" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

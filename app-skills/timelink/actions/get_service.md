# timelink · `get_service`

Fetch one Timelink service by its identifier.

- **Service**: `timelink`
- **Action**: `get_service`
- **Action id**: `timelink.get_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_service"
```

## Run

```bash
oo connector run "timelink" --action "get_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

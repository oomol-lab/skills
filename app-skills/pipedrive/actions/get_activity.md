# Pipedrive · `get_activity`

Get one Pipedrive activity by activity ID.

- **Service**: `pipedrive`
- **Action**: `get_activity`
- **Action id**: `pipedrive.get_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "get_activity"
```

## Run

```bash
oo connector run "pipedrive" --action "get_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

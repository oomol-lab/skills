# Amara · `get_activity`

Fetch a single Amara activity item by activity ID.

- **Service**: `amara`
- **Action**: `get_activity`
- **Action id**: `amara.get_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_activity"
```

## Run

```bash
oo connector run "amara" --action "get_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Close · `get_lead`

Fetch a single Close lead by ID.

- **Service**: `close`
- **Action**: `get_lead`
- **Action id**: `close.get_lead`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "get_lead"
```

## Run

```bash
oo connector run "close" --action "get_lead" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

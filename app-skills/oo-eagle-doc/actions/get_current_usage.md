# Eagle Doc · `get_current_usage`

Fetch the current billing-month usage counters for the connected Eagle Doc API key.

- **Service**: `eagle_doc`
- **Action**: `get_current_usage`
- **Action id**: `eagle_doc.get_current_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eagle_doc" --action "get_current_usage"
```

## Run

```bash
oo connector run "eagle_doc" --action "get_current_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

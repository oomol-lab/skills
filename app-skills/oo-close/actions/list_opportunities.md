# Close · `list_opportunities`

List Close opportunities with stable workflow filters and pagination.

- **Service**: `close`
- **Action**: `list_opportunities`
- **Action id**: `close.list_opportunities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "list_opportunities"
```

## Run

```bash
oo connector run "close" --action "list_opportunities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

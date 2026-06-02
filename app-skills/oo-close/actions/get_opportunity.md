# Close · `get_opportunity`

Fetch a single Close opportunity by ID.

- **Service**: `close`
- **Action**: `get_opportunity`
- **Action id**: `close.get_opportunity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "get_opportunity"
```

## Run

```bash
oo connector run "close" --action "get_opportunity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

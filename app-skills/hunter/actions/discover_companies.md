# Hunter · `discover_companies`

Discover companies in Hunter using a natural-language query or filters.

- **Service**: `hunter`
- **Action**: `discover_companies`
- **Action id**: `hunter.discover_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "discover_companies"
```

## Run

```bash
oo connector run "hunter" --action "discover_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

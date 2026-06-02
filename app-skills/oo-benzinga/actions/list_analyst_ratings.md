# Benzinga · `list_analyst_ratings`

List Benzinga analyst rating calendar events with optional date and symbol filters.

- **Service**: `benzinga`
- **Action**: `list_analyst_ratings`
- **Action id**: `benzinga.list_analyst_ratings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benzinga" --action "list_analyst_ratings"
```

## Run

```bash
oo connector run "benzinga" --action "list_analyst_ratings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

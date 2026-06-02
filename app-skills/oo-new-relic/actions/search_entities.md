# New Relic · `search_entities`

Search New Relic entities with either the raw entity search language or a structured query builder.

- **Service**: `new_relic`
- **Action**: `search_entities`
- **Action id**: `new_relic.search_entities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "search_entities"
```

## Run

```bash
oo connector run "new_relic" --action "search_entities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

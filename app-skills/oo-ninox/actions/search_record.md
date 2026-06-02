# Ninox · `search_record`

Find a single Ninox record by filters in one table.

- **Service**: `ninox`
- **Action**: `search_record`
- **Action id**: `ninox.search_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "search_record"
```

## Run

```bash
oo connector run "ninox" --action "search_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

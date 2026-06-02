# Ninox · `get_database`

Get Ninox schema metadata for one database.

- **Service**: `ninox`
- **Action**: `get_database`
- **Action id**: `ninox.get_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "get_database"
```

## Run

```bash
oo connector run "ninox" --action "get_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

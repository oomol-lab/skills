# Neon · `get_database`

Get detailed metadata for a Neon database.

- **Service**: `neon`
- **Action**: `get_database`
- **Action id**: `neon.get_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "get_database"
```

## Run

```bash
oo connector run "neon" --action "get_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

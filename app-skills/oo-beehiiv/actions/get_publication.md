# Beehiiv · `get_publication`

Fetch one Beehiiv publication by ID with optional statistics expansion.

- **Service**: `beehiiv`
- **Action**: `get_publication`
- **Action id**: `beehiiv.get_publication`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beehiiv" --action "get_publication"
```

## Run

```bash
oo connector run "beehiiv" --action "get_publication" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

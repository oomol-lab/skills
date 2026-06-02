# Apify · `get_actor`

Retrieve metadata for one Apify actor by identifier.

- **Service**: `apify`
- **Action**: `get_actor`
- **Action id**: `apify.get_actor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apify" --action "get_actor"
```

## Run

```bash
oo connector run "apify" --action "get_actor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

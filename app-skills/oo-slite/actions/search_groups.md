# Slite · `search_groups`

Search Slite groups by name and return cursor-based pagination metadata.

- **Service**: `slite`
- **Action**: `search_groups`
- **Action id**: `slite.search_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "search_groups"
```

## Run

```bash
oo connector run "slite" --action "search_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

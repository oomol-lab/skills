# BunnyCDN · `list_pull_zones`

List Bunny Pull Zones with optional pagination, search, and certificate expansion.

- **Service**: `bunnycdn`
- **Action**: `list_pull_zones`
- **Action id**: `bunnycdn.list_pull_zones`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bunnycdn" --action "list_pull_zones"
```

## Run

```bash
oo connector run "bunnycdn" --action "list_pull_zones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

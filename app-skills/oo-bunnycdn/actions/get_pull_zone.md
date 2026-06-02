# BunnyCDN · `get_pull_zone`

Get one Bunny Pull Zone by ID.

- **Service**: `bunnycdn`
- **Action**: `get_pull_zone`
- **Action id**: `bunnycdn.get_pull_zone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bunnycdn" --action "get_pull_zone"
```

## Run

```bash
oo connector run "bunnycdn" --action "get_pull_zone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

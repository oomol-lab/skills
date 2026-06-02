# Apollo · `search_organizations`

Search Apollo organizations with the first-pass organization filters.

- **Service**: `apollo`
- **Action**: `search_organizations`
- **Action id**: `apollo.search_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apollo" --action "search_organizations"
```

## Run

```bash
oo connector run "apollo" --action "search_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

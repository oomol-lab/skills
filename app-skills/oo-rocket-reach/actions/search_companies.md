# RocketReach · `search_companies`

Look up a company by exact name, domain, or id and return it as a single-item company list for search-style compatibility.

- **Service**: `rocket_reach`
- **Action**: `search_companies`
- **Action id**: `rocket_reach.search_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "search_companies"
```

## Run

```bash
oo connector run "rocket_reach" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

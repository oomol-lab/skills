# Apollo · `search_people`

Search Apollo people with the first-pass prospecting filters.

- **Service**: `apollo`
- **Action**: `search_people`
- **Action id**: `apollo.search_people`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apollo" --action "search_people"
```

## Run

```bash
oo connector run "apollo" --action "search_people" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

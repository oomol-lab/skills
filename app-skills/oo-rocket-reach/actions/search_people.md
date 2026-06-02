# RocketReach · `search_people`

Search RocketReach people with the official structured query object and pagination controls.

- **Service**: `rocket_reach`
- **Action**: `search_people`
- **Action id**: `rocket_reach.search_people`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "search_people"
```

## Run

```bash
oo connector run "rocket_reach" --action "search_people" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

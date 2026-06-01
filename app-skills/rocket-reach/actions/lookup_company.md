# RocketReach · `lookup_company`

Look up a RocketReach company profile by id, name, or domain.

- **Service**: `rocket_reach`
- **Action**: `lookup_company`
- **Action id**: `rocket_reach.lookup_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "lookup_company"
```

## Run

```bash
oo connector run "rocket_reach" --action "lookup_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

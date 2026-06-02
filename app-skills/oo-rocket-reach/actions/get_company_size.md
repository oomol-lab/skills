# RocketReach · `get_company_size`

Retrieve the employee-count data exposed on a RocketReach company profile by looking up the target company first.

- **Service**: `rocket_reach`
- **Action**: `get_company_size`
- **Action id**: `rocket_reach.get_company_size`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "get_company_size"
```

## Run

```bash
oo connector run "rocket_reach" --action "get_company_size" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

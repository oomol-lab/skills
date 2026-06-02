# RocketReach · `lookup_person_and_company`

Look up a RocketReach person profile and return any company profile embedded in the official lookup response.

- **Service**: `rocket_reach`
- **Action**: `lookup_person_and_company`
- **Action id**: `rocket_reach.lookup_person_and_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "lookup_person_and_company"
```

## Run

```bash
oo connector run "rocket_reach" --action "lookup_person_and_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

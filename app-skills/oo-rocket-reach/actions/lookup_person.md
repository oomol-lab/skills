# RocketReach · `lookup_person`

Look up a RocketReach person profile by id, email, name, or LinkedIn URL through the official lookup endpoint.

- **Service**: `rocket_reach`
- **Action**: `lookup_person`
- **Action id**: `rocket_reach.lookup_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "lookup_person"
```

## Run

```bash
oo connector run "rocket_reach" --action "lookup_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

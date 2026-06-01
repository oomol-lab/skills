# RocketReach · `check_person_status`

Check the current status of one or more RocketReach person lookups.

- **Service**: `rocket_reach`
- **Action**: `check_person_status`
- **Action id**: `rocket_reach.check_person_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "check_person_status"
```

## Run

```bash
oo connector run "rocket_reach" --action "check_person_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

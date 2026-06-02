# RocketReach · `get_account`

Retrieve the authenticated RocketReach account profile.

- **Service**: `rocket_reach`
- **Action**: `get_account`
- **Action id**: `rocket_reach.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocket_reach" --action "get_account"
```

## Run

```bash
oo connector run "rocket_reach" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

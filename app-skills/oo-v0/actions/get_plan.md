# v0 · `get_plan`

Get the current subscription plan for the connected v0 user.

- **Service**: `v0`
- **Action**: `get_plan`
- **Action id**: `v0.get_plan`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_plan"
```

## Run

```bash
oo connector run "v0" --action "get_plan" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

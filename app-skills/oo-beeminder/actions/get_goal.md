# Beeminder · `get_goal`

Read one Beeminder goal, optionally including its datapoints.

- **Service**: `beeminder`
- **Action**: `get_goal`
- **Action id**: `beeminder.get_goal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beeminder" --action "get_goal"
```

## Run

```bash
oo connector run "beeminder" --action "get_goal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

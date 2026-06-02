# TickTick · `get_user_project`

List the projects available to the connected TickTick account.

- **Service**: `ticktick`
- **Action**: `get_user_project`
- **Action id**: `ticktick.get_user_project`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "get_user_project"
```

## Run

```bash
oo connector run "ticktick" --action "get_user_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

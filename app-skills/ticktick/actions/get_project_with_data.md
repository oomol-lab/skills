# TickTick · `get_project_with_data`

Get a TickTick project together with its undone tasks and columns by project ID.

- **Service**: `ticktick`
- **Action**: `get_project_with_data`
- **Action id**: `ticktick.get_project_with_data`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "get_project_with_data"
```

## Run

```bash
oo connector run "ticktick" --action "get_project_with_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

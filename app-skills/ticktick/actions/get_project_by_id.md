# TickTick · `get_project_by_id`

Get a TickTick project by its project ID.

- **Service**: `ticktick`
- **Action**: `get_project_by_id`
- **Action id**: `ticktick.get_project_by_id`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "get_project_by_id"
```

## Run

```bash
oo connector run "ticktick" --action "get_project_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

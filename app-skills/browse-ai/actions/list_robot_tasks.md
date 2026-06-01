# Browse AI · `list_robot_tasks`

List Browse AI robot tasks with pagination and status filters.

- **Service**: `browse_ai`
- **Action**: `list_robot_tasks`
- **Action id**: `browse_ai.list_robot_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browse_ai" --action "list_robot_tasks"
```

## Run

```bash
oo connector run "browse_ai" --action "list_robot_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Rocketlane · `list_tasks`

List Rocketlane tasks with pagination, sorting, and the first-pass task filters.

- **Service**: `rocketlane`
- **Action**: `list_tasks`
- **Action id**: `rocketlane.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocketlane" --action "list_tasks"
```

## Run

```bash
oo connector run "rocketlane" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

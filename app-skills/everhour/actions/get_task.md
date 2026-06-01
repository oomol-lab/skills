# Everhour · `get_task`

Get one Everhour task by its task ID.

- **Service**: `everhour`
- **Action**: `get_task`
- **Action id**: `everhour.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "get_task"
```

## Run

```bash
oo connector run "everhour" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

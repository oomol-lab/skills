# Habitica · `get_task`

Get one Habitica task by task ID or alias.

- **Service**: `habitica`
- **Action**: `get_task`
- **Action id**: `habitica.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "get_task"
```

## Run

```bash
oo connector run "habitica" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

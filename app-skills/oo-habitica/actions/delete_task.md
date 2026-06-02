# Habitica · `delete_task`

Delete one Habitica task by task ID or alias.

- **Service**: `habitica`
- **Action**: `delete_task`
- **Action id**: `habitica.delete_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "delete_task"
```

## Run

```bash
oo connector run "habitica" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Habitica data. Always confirm the target and get explicit user approval before running.

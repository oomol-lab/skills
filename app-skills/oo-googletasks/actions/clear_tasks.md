# Google Tasks · `clear_tasks`

Clear every completed task from a Google Tasks task list.

- **Service**: `googletasks`
- **Action**: `clear_tasks`
- **Action id**: `googletasks.clear_tasks`
- **Required scopes**: googletasks.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "clear_tasks"
```

## Run

```bash
oo connector run "googletasks" --action "clear_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Tasks data. Always confirm the target and get explicit user approval before running.

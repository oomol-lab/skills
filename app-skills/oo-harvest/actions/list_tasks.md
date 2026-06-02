# Harvest · `list_tasks`

List tasks available in the connected Harvest account.

- **Service**: `harvest`
- **Action**: `list_tasks`
- **Action id**: `harvest.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "list_tasks"
```

## Run

```bash
oo connector run "harvest" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

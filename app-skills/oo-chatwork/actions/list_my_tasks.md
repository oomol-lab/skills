# Chatwork · `list_my_tasks`

List Chatwork tasks assigned to the authenticated account.

- **Service**: `chatwork`
- **Action**: `list_my_tasks`
- **Action id**: `chatwork.list_my_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "list_my_tasks"
```

## Run

```bash
oo connector run "chatwork" --action "list_my_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

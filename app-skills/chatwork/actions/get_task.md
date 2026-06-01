# Chatwork · `get_task`

Get one task from a Chatwork room.

- **Service**: `chatwork`
- **Action**: `get_task`
- **Action id**: `chatwork.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "get_task"
```

## Run

```bash
oo connector run "chatwork" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

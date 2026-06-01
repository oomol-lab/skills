# Manus · `confirm_task_action`

Confirm a pending Manus task action from a waiting status event. Use send_message instead for messageAskUser events.

- **Service**: `manus`
- **Action**: `confirm_task_action`
- **Action id**: `manus.confirm_task_action`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "confirm_task_action"
```

## Run

```bash
oo connector run "manus" --action "confirm_task_action" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

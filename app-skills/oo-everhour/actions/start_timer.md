# Everhour · `start_timer`

Start an Everhour timer for a task with an optional user date and comment.

- **Service**: `everhour`
- **Action**: `start_timer`
- **Action id**: `everhour.start_timer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "start_timer"
```

## Run

```bash
oo connector run "everhour" --action "start_timer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

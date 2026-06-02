# Everhour · `get_current_timer`

Get the current running Everhour timer.

- **Service**: `everhour`
- **Action**: `get_current_timer`
- **Action id**: `everhour.get_current_timer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "get_current_timer"
```

## Run

```bash
oo connector run "everhour" --action "get_current_timer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

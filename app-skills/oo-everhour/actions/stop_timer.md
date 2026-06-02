# Everhour · `stop_timer`

Stop the current Everhour timer and return the final timer snapshot.

- **Service**: `everhour`
- **Action**: `stop_timer`
- **Action id**: `everhour.stop_timer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "stop_timer"
```

## Run

```bash
oo connector run "everhour" --action "stop_timer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

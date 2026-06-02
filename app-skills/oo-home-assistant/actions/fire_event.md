# Home Assistant · `fire_event`

Fire one Home Assistant event with optional event data.

- **Service**: `home_assistant`
- **Action**: `fire_event`
- **Action id**: `home_assistant.fire_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "fire_event"
```

## Run

```bash
oo connector run "home_assistant" --action "fire_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

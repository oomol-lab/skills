# Home Assistant · `call_service`

Call a Home Assistant service to control entities, such as light.turn_on or switch.turn_off.

- **Service**: `home_assistant`
- **Action**: `call_service`
- **Action id**: `home_assistant.call_service`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "call_service"
```

## Run

```bash
oo connector run "home_assistant" --action "call_service" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

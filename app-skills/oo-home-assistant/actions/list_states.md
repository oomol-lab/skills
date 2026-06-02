# Home Assistant · `list_states`

List all current Home Assistant entity states.

- **Service**: `home_assistant`
- **Action**: `list_states`
- **Action id**: `home_assistant.list_states`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "list_states"
```

## Run

```bash
oo connector run "home_assistant" --action "list_states" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

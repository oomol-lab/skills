# Home Assistant · `get_state`

Fetch the current state for one Home Assistant entity.

- **Service**: `home_assistant`
- **Action**: `get_state`
- **Action id**: `home_assistant.get_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "get_state"
```

## Run

```bash
oo connector run "home_assistant" --action "get_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

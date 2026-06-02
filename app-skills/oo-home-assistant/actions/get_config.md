# Home Assistant · `get_config`

Fetch the Home Assistant instance configuration.

- **Service**: `home_assistant`
- **Action**: `get_config`
- **Action id**: `home_assistant.get_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "get_config"
```

## Run

```bash
oo connector run "home_assistant" --action "get_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

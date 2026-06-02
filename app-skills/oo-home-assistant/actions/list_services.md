# Home Assistant · `list_services`

List Home Assistant service domains and their available services.

- **Service**: `home_assistant`
- **Action**: `list_services`
- **Action id**: `home_assistant.list_services`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "list_services"
```

## Run

```bash
oo connector run "home_assistant" --action "list_services" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

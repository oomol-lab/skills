# Home Assistant · `list_events`

List Home Assistant event types currently known by the instance.

- **Service**: `home_assistant`
- **Action**: `list_events`
- **Action id**: `home_assistant.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "list_events"
```

## Run

```bash
oo connector run "home_assistant" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

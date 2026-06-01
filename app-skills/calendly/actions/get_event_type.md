# Calendly · `get_event_type`

Retrieve one Calendly event type by event type URI.

- **Service**: `calendly`
- **Action**: `get_event_type`
- **Action id**: `calendly.get_event_type`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_event_type"
```

## Run

```bash
oo connector run "calendly" --action "get_event_type" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

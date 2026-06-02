# PostHog · `get_event_definition_by_name`

Get a PostHog event definition by exact event name.

- **Service**: `posthog`
- **Action**: `get_event_definition_by_name`
- **Action id**: `posthog.get_event_definition_by_name`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_event_definition_by_name"
```

## Run

```bash
oo connector run "posthog" --action "get_event_definition_by_name" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

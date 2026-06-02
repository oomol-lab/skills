# PostHog · `get_event_definition`

Get a PostHog event definition by ID.

- **Service**: `posthog`
- **Action**: `get_event_definition`
- **Action id**: `posthog.get_event_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_event_definition"
```

## Run

```bash
oo connector run "posthog" --action "get_event_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

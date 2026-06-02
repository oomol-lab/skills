# PostHog · `list_event_definitions`

List event definitions for a PostHog project.

- **Service**: `posthog`
- **Action**: `list_event_definitions`
- **Action id**: `posthog.list_event_definitions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_event_definitions"
```

## Run

```bash
oo connector run "posthog" --action "list_event_definitions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# PostHog · `create_event_definition`

Create an event definition for a PostHog project.

- **Service**: `posthog`
- **Action**: `create_event_definition`
- **Action id**: `posthog.create_event_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "create_event_definition"
```

## Run

```bash
oo connector run "posthog" --action "create_event_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

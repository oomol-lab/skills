# PostHog · `delete_event_definition`

Delete a PostHog event definition by ID.

- **Service**: `posthog`
- **Action**: `delete_event_definition`
- **Action id**: `posthog.delete_event_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "delete_event_definition"
```

## Run

```bash
oo connector run "posthog" --action "delete_event_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PostHog data. Always confirm the target and get explicit user approval before running.

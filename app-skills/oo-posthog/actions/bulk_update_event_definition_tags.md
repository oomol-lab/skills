# PostHog · `bulk_update_event_definition_tags`

Bulk add, remove, or set tags on PostHog event definitions.

- **Service**: `posthog`
- **Action**: `bulk_update_event_definition_tags`
- **Action id**: `posthog.bulk_update_event_definition_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "bulk_update_event_definition_tags"
```

## Run

```bash
oo connector run "posthog" --action "bulk_update_event_definition_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

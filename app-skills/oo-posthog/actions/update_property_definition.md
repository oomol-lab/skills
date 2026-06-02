# PostHog · `update_property_definition`

Partially update a PostHog property definition by ID.

- **Service**: `posthog`
- **Action**: `update_property_definition`
- **Action id**: `posthog.update_property_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "update_property_definition"
```

## Run

```bash
oo connector run "posthog" --action "update_property_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

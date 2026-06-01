# PostHog · `update_annotation`

Partially update a PostHog annotation by ID.

- **Service**: `posthog`
- **Action**: `update_annotation`
- **Action id**: `posthog.update_annotation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "update_annotation"
```

## Run

```bash
oo connector run "posthog" --action "update_annotation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

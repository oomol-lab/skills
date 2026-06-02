# PostHog · `add_persons_to_static_cohort`

Add person UUIDs to a static PostHog cohort.

- **Service**: `posthog`
- **Action**: `add_persons_to_static_cohort`
- **Action id**: `posthog.add_persons_to_static_cohort`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "add_persons_to_static_cohort"
```

## Run

```bash
oo connector run "posthog" --action "add_persons_to_static_cohort" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

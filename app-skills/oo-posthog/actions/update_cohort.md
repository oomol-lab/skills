# PostHog · `update_cohort`

Partially update a PostHog cohort by ID.

- **Service**: `posthog`
- **Action**: `update_cohort`
- **Action id**: `posthog.update_cohort`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "update_cohort"
```

## Run

```bash
oo connector run "posthog" --action "update_cohort" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

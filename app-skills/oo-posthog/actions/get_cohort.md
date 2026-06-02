# PostHog · `get_cohort`

Get a PostHog cohort by ID.

- **Service**: `posthog`
- **Action**: `get_cohort`
- **Action id**: `posthog.get_cohort`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_cohort"
```

## Run

```bash
oo connector run "posthog" --action "get_cohort" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

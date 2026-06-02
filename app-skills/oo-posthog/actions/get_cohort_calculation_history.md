# PostHog · `get_cohort_calculation_history`

Get the raw calculation history payload for a PostHog cohort.

- **Service**: `posthog`
- **Action**: `get_cohort_calculation_history`
- **Action id**: `posthog.get_cohort_calculation_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_cohort_calculation_history"
```

## Run

```bash
oo connector run "posthog" --action "get_cohort_calculation_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

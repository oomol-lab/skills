# PostHog · `get_cohort_persons`

List persons that belong to a PostHog cohort.

- **Service**: `posthog`
- **Action**: `get_cohort_persons`
- **Action id**: `posthog.get_cohort_persons`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_cohort_persons"
```

## Run

```bash
oo connector run "posthog" --action "get_cohort_persons" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

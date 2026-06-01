# PostHog · `list_cohorts`

List cohorts for a PostHog project.

- **Service**: `posthog`
- **Action**: `list_cohorts`
- **Action id**: `posthog.list_cohorts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_cohorts"
```

## Run

```bash
oo connector run "posthog" --action "list_cohorts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# PostHog · `run_dashboard_insights`

Run all insights on a PostHog dashboard and return their results.

- **Service**: `posthog`
- **Action**: `run_dashboard_insights`
- **Action id**: `posthog.run_dashboard_insights`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "run_dashboard_insights"
```

## Run

```bash
oo connector run "posthog" --action "run_dashboard_insights" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

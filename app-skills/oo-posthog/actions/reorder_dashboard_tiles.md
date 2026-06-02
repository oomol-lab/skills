# PostHog · `reorder_dashboard_tiles`

Reorder tiles on a PostHog dashboard.

- **Service**: `posthog`
- **Action**: `reorder_dashboard_tiles`
- **Action id**: `posthog.reorder_dashboard_tiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "reorder_dashboard_tiles"
```

## Run

```bash
oo connector run "posthog" --action "reorder_dashboard_tiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

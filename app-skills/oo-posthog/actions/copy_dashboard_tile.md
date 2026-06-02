# PostHog · `copy_dashboard_tile`

Copy an existing PostHog dashboard tile to another dashboard.

- **Service**: `posthog`
- **Action**: `copy_dashboard_tile`
- **Action id**: `posthog.copy_dashboard_tile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "copy_dashboard_tile"
```

## Run

```bash
oo connector run "posthog" --action "copy_dashboard_tile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

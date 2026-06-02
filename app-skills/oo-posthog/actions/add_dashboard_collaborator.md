# PostHog · `add_dashboard_collaborator`

Add a collaborator to a PostHog dashboard.

- **Service**: `posthog`
- **Action**: `add_dashboard_collaborator`
- **Action id**: `posthog.add_dashboard_collaborator`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "add_dashboard_collaborator"
```

## Run

```bash
oo connector run "posthog" --action "add_dashboard_collaborator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

# PostHog · `remove_dashboard_collaborator`

Remove a collaborator from a PostHog dashboard.

- **Service**: `posthog`
- **Action**: `remove_dashboard_collaborator`
- **Action id**: `posthog.remove_dashboard_collaborator`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "remove_dashboard_collaborator"
```

## Run

```bash
oo connector run "posthog" --action "remove_dashboard_collaborator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PostHog data. Always confirm the target and get explicit user approval before running.

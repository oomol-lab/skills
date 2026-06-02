# PostHog · `list_dashboard_collaborators`

List collaborators for a PostHog dashboard.

- **Service**: `posthog`
- **Action**: `list_dashboard_collaborators`
- **Action id**: `posthog.list_dashboard_collaborators`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_dashboard_collaborators"
```

## Run

```bash
oo connector run "posthog" --action "list_dashboard_collaborators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

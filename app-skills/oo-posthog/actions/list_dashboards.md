# PostHog · `list_dashboards`

List dashboards for a PostHog project.

- **Service**: `posthog`
- **Action**: `list_dashboards`
- **Action id**: `posthog.list_dashboards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_dashboards"
```

## Run

```bash
oo connector run "posthog" --action "list_dashboards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

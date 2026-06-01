# PostHog · `list_insights`

List insights for a PostHog project.

- **Service**: `posthog`
- **Action**: `list_insights`
- **Action id**: `posthog.list_insights`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_insights"
```

## Run

```bash
oo connector run "posthog" --action "list_insights" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

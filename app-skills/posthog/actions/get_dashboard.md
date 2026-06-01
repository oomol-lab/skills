# PostHog · `get_dashboard`

Get a PostHog dashboard by ID with a stable top-level connector shape.

- **Service**: `posthog`
- **Action**: `get_dashboard`
- **Action id**: `posthog.get_dashboard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_dashboard"
```

## Run

```bash
oo connector run "posthog" --action "get_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

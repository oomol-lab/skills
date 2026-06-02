# PostHog · `create_dashboard`

Create a PostHog dashboard in a project.

- **Service**: `posthog`
- **Action**: `create_dashboard`
- **Action id**: `posthog.create_dashboard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "create_dashboard"
```

## Run

```bash
oo connector run "posthog" --action "create_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.

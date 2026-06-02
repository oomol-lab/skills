# PostHog · `delete_dashboard`

Mark a PostHog dashboard as deleted using the official soft-delete contract.

- **Service**: `posthog`
- **Action**: `delete_dashboard`
- **Action id**: `posthog.delete_dashboard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "delete_dashboard"
```

## Run

```bash
oo connector run "posthog" --action "delete_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PostHog data. Always confirm the target and get explicit user approval before running.

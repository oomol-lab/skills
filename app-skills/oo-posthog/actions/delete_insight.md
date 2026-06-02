# PostHog · `delete_insight`

Delete a saved PostHog insight by ID.

- **Service**: `posthog`
- **Action**: `delete_insight`
- **Action id**: `posthog.delete_insight`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "delete_insight"
```

## Run

```bash
oo connector run "posthog" --action "delete_insight" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PostHog data. Always confirm the target and get explicit user approval before running.

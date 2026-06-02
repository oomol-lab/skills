# PostHog · `delete_annotation`

Mark a PostHog annotation as deleted using the official soft-delete contract.

- **Service**: `posthog`
- **Action**: `delete_annotation`
- **Action id**: `posthog.delete_annotation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "delete_annotation"
```

## Run

```bash
oo connector run "posthog" --action "delete_annotation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PostHog data. Always confirm the target and get explicit user approval before running.

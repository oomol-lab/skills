# PostHog · `delete_feature_flag`

Soft delete a PostHog feature flag by setting deleted to true.

- **Service**: `posthog`
- **Action**: `delete_feature_flag`
- **Action id**: `posthog.delete_feature_flag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "delete_feature_flag"
```

## Run

```bash
oo connector run "posthog" --action "delete_feature_flag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PostHog data. Always confirm the target and get explicit user approval before running.

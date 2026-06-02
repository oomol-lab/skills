# PostHog · `get_feature_flags_local_evaluation`

Get the local evaluation payload for PostHog feature flags.

- **Service**: `posthog`
- **Action**: `get_feature_flags_local_evaluation`
- **Action id**: `posthog.get_feature_flags_local_evaluation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_feature_flags_local_evaluation"
```

## Run

```bash
oo connector run "posthog" --action "get_feature_flags_local_evaluation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# PostHog · `get_feature_flag_dependent_flags`

List the feature flags that depend on a PostHog feature flag.

- **Service**: `posthog`
- **Action**: `get_feature_flag_dependent_flags`
- **Action id**: `posthog.get_feature_flag_dependent_flags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_feature_flag_dependent_flags"
```

## Run

```bash
oo connector run "posthog" --action "get_feature_flag_dependent_flags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

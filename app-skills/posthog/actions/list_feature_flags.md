# PostHog · `list_feature_flags`

List feature flags for a PostHog project.

- **Service**: `posthog`
- **Action**: `list_feature_flags`
- **Action id**: `posthog.list_feature_flags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_feature_flags"
```

## Run

```bash
oo connector run "posthog" --action "list_feature_flags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

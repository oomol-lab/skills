# PostHog · `get_feature_flag`

Get a PostHog feature flag by ID.

- **Service**: `posthog`
- **Action**: `get_feature_flag`
- **Action id**: `posthog.get_feature_flag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_feature_flag"
```

## Run

```bash
oo connector run "posthog" --action "get_feature_flag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

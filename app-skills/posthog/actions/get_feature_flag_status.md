# PostHog · `get_feature_flag_status`

Get the computed status for a PostHog feature flag.

- **Service**: `posthog`
- **Action**: `get_feature_flag_status`
- **Action id**: `posthog.get_feature_flag_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_feature_flag_status"
```

## Run

```bash
oo connector run "posthog" --action "get_feature_flag_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

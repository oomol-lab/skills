# LaunchDarkly · `get_feature_flag`

Get a LaunchDarkly feature flag by project key and feature flag key.

- **Service**: `launch_darkly`
- **Action**: `get_feature_flag`
- **Action id**: `launch_darkly.get_feature_flag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_feature_flag"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_feature_flag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

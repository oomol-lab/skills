# LaunchDarkly · `get_feature_flags`

List LaunchDarkly feature flags in a project with optional filtering, pagination, and summary output.

- **Service**: `launch_darkly`
- **Action**: `get_feature_flags`
- **Action id**: `launch_darkly.get_feature_flags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_feature_flags"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_feature_flags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

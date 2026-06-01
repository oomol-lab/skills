# LaunchDarkly · `get_tags`

List LaunchDarkly tags with optional prefix and resource-kind filters.

- **Service**: `launch_darkly`
- **Action**: `get_tags`
- **Action id**: `launch_darkly.get_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_tags"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

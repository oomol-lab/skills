# LaunchDarkly · `get_segments`

List LaunchDarkly segments in a project environment with optional filtering and pagination.

- **Service**: `launch_darkly`
- **Action**: `get_segments`
- **Action id**: `launch_darkly.get_segments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_segments"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_segments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

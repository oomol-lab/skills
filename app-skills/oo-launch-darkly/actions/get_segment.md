# LaunchDarkly · `get_segment`

Get a LaunchDarkly segment by project key, environment key, and segment key.

- **Service**: `launch_darkly`
- **Action**: `get_segment`
- **Action id**: `launch_darkly.get_segment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_segment"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_segment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

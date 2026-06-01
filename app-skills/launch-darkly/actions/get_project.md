# LaunchDarkly · `get_project`

Get a LaunchDarkly project by project key.

- **Service**: `launch_darkly`
- **Action**: `get_project`
- **Action id**: `launch_darkly.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_project"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

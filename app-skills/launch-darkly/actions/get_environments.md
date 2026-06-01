# LaunchDarkly · `get_environments`

List the LaunchDarkly environments that belong to a project.

- **Service**: `launch_darkly`
- **Action**: `get_environments`
- **Action id**: `launch_darkly.get_environments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_environments"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_environments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

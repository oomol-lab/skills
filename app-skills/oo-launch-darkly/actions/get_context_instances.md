# LaunchDarkly · `get_context_instances`

Get a LaunchDarkly context instance by project key, environment key, and context instance identifier.

- **Service**: `launch_darkly`
- **Action**: `get_context_instances`
- **Action id**: `launch_darkly.get_context_instances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_context_instances"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_context_instances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

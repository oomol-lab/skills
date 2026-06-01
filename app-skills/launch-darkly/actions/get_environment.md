# LaunchDarkly · `get_environment`

Get a LaunchDarkly environment by project key and environment key.

- **Service**: `launch_darkly`
- **Action**: `get_environment`
- **Action id**: `launch_darkly.get_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_environment"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

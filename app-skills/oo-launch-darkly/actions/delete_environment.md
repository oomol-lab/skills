# LaunchDarkly · `delete_environment`

Delete a LaunchDarkly environment by project key and environment key.

- **Service**: `launch_darkly`
- **Action**: `delete_environment`
- **Action id**: `launch_darkly.delete_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "delete_environment"
```

## Run

```bash
oo connector run "launch_darkly" --action "delete_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites LaunchDarkly data. Always confirm the target and get explicit user approval before running.

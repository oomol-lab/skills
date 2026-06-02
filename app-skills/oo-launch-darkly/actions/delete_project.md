# LaunchDarkly · `delete_project`

Delete a LaunchDarkly project by project key.

- **Service**: `launch_darkly`
- **Action**: `delete_project`
- **Action id**: `launch_darkly.delete_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "delete_project"
```

## Run

```bash
oo connector run "launch_darkly" --action "delete_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites LaunchDarkly data. Always confirm the target and get explicit user approval before running.

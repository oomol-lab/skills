# LaunchDarkly · `list_teams`

List LaunchDarkly teams with optional filtering, pagination, and expansion controls.

- **Service**: `launch_darkly`
- **Action**: `list_teams`
- **Action id**: `launch_darkly.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "list_teams"
```

## Run

```bash
oo connector run "launch_darkly" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

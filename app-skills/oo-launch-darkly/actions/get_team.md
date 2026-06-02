# LaunchDarkly · `get_team`

Get a LaunchDarkly team by team key.

- **Service**: `launch_darkly`
- **Action**: `get_team`
- **Action id**: `launch_darkly.get_team`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_team"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_team" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

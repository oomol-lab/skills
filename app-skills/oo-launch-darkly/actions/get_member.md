# LaunchDarkly · `get_member`

Get a LaunchDarkly account member by member identifier.

- **Service**: `launch_darkly`
- **Action**: `get_member`
- **Action id**: `launch_darkly.get_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_member"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

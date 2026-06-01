# LaunchDarkly · `get_members`

List LaunchDarkly account members with optional filtering, sorting, pagination, and expansion.

- **Service**: `launch_darkly`
- **Action**: `get_members`
- **Action id**: `launch_darkly.get_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_members"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

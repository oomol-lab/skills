# LaunchDarkly · `get_token`

Get a LaunchDarkly access token by token identifier.

- **Service**: `launch_darkly`
- **Action**: `get_token`
- **Action id**: `launch_darkly.get_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_token"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

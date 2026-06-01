# LaunchDarkly · `get_caller_identity`

Get the LaunchDarkly caller identity for the current access token.

- **Service**: `launch_darkly`
- **Action**: `get_caller_identity`
- **Action id**: `launch_darkly.get_caller_identity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_caller_identity"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_caller_identity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

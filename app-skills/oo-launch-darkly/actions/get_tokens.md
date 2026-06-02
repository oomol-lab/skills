# LaunchDarkly · `get_tokens`

List LaunchDarkly access tokens with optional pagination and visibility scope.

- **Service**: `launch_darkly`
- **Action**: `get_tokens`
- **Action id**: `launch_darkly.get_tokens`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_tokens"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_tokens" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

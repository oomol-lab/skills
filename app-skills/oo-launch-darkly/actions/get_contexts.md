# LaunchDarkly · `get_contexts`

Get a LaunchDarkly context by context kind and key, with optional paging over related results.

- **Service**: `launch_darkly`
- **Action**: `get_contexts`
- **Action id**: `launch_darkly.get_contexts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "get_contexts"
```

## Run

```bash
oo connector run "launch_darkly" --action "get_contexts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

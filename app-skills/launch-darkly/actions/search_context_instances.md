# LaunchDarkly · `search_context_instances`

Search LaunchDarkly context instances in a project environment with filtering, sorting, and pagination.

- **Service**: `launch_darkly`
- **Action**: `search_context_instances`
- **Action id**: `launch_darkly.search_context_instances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "search_context_instances"
```

## Run

```bash
oo connector run "launch_darkly" --action "search_context_instances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

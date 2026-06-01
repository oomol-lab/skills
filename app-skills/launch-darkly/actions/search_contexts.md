# LaunchDarkly · `search_contexts`

Search LaunchDarkly contexts in a project environment with filtering, sorting, and pagination.

- **Service**: `launch_darkly`
- **Action**: `search_contexts`
- **Action id**: `launch_darkly.search_contexts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "search_contexts"
```

## Run

```bash
oo connector run "launch_darkly" --action "search_contexts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

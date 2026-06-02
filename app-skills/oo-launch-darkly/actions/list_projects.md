# LaunchDarkly · `list_projects`

List LaunchDarkly projects with optional filtering, sorting, pagination, and expansion.

- **Service**: `launch_darkly`
- **Action**: `list_projects`
- **Action id**: `launch_darkly.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "list_projects"
```

## Run

```bash
oo connector run "launch_darkly" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

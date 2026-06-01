# timelink · `list_projects`

List Timelink projects with optional filtering and pagination parameters.

- **Service**: `timelink`
- **Action**: `list_projects`
- **Action id**: `timelink.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "list_projects"
```

## Run

```bash
oo connector run "timelink" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

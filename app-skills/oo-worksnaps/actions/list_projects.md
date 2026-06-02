# Worksnaps · `list_projects`

List Worksnaps projects that the current user is involved in.

- **Service**: `worksnaps`
- **Action**: `list_projects`
- **Action id**: `worksnaps.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "list_projects"
```

## Run

```bash
oo connector run "worksnaps" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Dovetail · `list_projects`

List Dovetail projects with pagination and title filtering.

- **Service**: `dovetail`
- **Action**: `list_projects`
- **Action id**: `dovetail.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dovetail" --action "list_projects"
```

## Run

```bash
oo connector run "dovetail" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

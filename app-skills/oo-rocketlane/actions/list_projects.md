# Rocketlane · `list_projects`

List Rocketlane projects with pagination, sorting, and the first-pass project filters.

- **Service**: `rocketlane`
- **Action**: `list_projects`
- **Action id**: `rocketlane.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocketlane" --action "list_projects"
```

## Run

```bash
oo connector run "rocketlane" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

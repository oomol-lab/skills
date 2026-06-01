# Leiga · `list_projects`

List Leiga projects using the official project list filters.

- **Service**: `leiga`
- **Action**: `list_projects`
- **Action id**: `leiga.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leiga" --action "list_projects"
```

## Run

```bash
oo connector run "leiga" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

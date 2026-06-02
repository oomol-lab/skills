# Manus · `list_projects`

List Manus projects available to the current account.

- **Service**: `manus`
- **Action**: `list_projects`
- **Action id**: `manus.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_projects"
```

## Run

```bash
oo connector run "manus" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

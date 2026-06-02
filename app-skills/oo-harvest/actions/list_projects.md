# Harvest · `list_projects`

List projects available in the connected Harvest account.

- **Service**: `harvest`
- **Action**: `list_projects`
- **Action id**: `harvest.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "list_projects"
```

## Run

```bash
oo connector run "harvest" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

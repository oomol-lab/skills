# Harvest · `get_project`

Get a single Harvest project by ID.

- **Service**: `harvest`
- **Action**: `get_project`
- **Action id**: `harvest.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "get_project"
```

## Run

```bash
oo connector run "harvest" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

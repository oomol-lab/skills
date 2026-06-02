# Basin · `get_project`

Fetch a single Basin project by ID.

- **Service**: `basin`
- **Action**: `get_project`
- **Action id**: `basin.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "get_project"
```

## Run

```bash
oo connector run "basin" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

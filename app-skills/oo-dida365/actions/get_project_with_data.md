# Dida365 · `get_project_with_data`

Get a Dida365 project together with its undone tasks and columns by project ID.

- **Service**: `dida365`
- **Action**: `get_project_with_data`
- **Action id**: `dida365.get_project_with_data`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "get_project_with_data"
```

## Run

```bash
oo connector run "dida365" --action "get_project_with_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Dida365 · `get_project_by_id`

Get a Dida365 (滴答清单) project by its project ID.

- **Service**: `dida365`
- **Action**: `get_project_by_id`
- **Action id**: `dida365.get_project_by_id`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "get_project_by_id"
```

## Run

```bash
oo connector run "dida365" --action "get_project_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

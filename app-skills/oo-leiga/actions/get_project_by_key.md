# Leiga · `get_project_by_key`

Fetch one Leiga project by its official project key.

- **Service**: `leiga`
- **Action**: `get_project_by_key`
- **Action id**: `leiga.get_project_by_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leiga" --action "get_project_by_key"
```

## Run

```bash
oo connector run "leiga" --action "get_project_by_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

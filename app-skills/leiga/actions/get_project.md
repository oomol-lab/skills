# Leiga · `get_project`

Fetch one Leiga project by its official numeric projectId.

- **Service**: `leiga`
- **Action**: `get_project`
- **Action id**: `leiga.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leiga" --action "get_project"
```

## Run

```bash
oo connector run "leiga" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

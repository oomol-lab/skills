# Manus · `list_skills`

List Manus skills available to the current account or project.

- **Service**: `manus`
- **Action**: `list_skills`
- **Action id**: `manus.list_skills`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_skills"
```

## Run

```bash
oo connector run "manus" --action "list_skills" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

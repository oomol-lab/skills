# Mailtrap · `get_project`

Get one Mailtrap project by ID.

- **Service**: `mailtrap`
- **Action**: `get_project`
- **Action id**: `mailtrap.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_project"
```

## Run

```bash
oo connector run "mailtrap" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

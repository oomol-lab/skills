# Mailtrap · `list_projects`

List Mailtrap projects under one account.

- **Service**: `mailtrap`
- **Action**: `list_projects`
- **Action id**: `mailtrap.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_projects"
```

## Run

```bash
oo connector run "mailtrap" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Mailtrap · `delete_project`

Delete one Mailtrap project.

- **Service**: `mailtrap`
- **Action**: `delete_project`
- **Action id**: `mailtrap.delete_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "delete_project"
```

## Run

```bash
oo connector run "mailtrap" --action "delete_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mailtrap data. Always confirm the target and get explicit user approval before running.

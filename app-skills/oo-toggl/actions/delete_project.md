# Toggl Track · `delete_project`

Delete a Toggl Track project by ID.

- **Service**: `toggl`
- **Action**: `delete_project`
- **Action id**: `toggl.delete_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "delete_project"
```

## Run

```bash
oo connector run "toggl" --action "delete_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Toggl Track data. Always confirm the target and get explicit user approval before running.

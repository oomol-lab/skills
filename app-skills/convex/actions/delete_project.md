# Convex · `delete_project`

Delete a Convex project and all of its deployments.

- **Service**: `convex`
- **Action**: `delete_project`
- **Action id**: `convex.delete_project`
- **Required scopes**: convex.projects.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "delete_project"
```

## Run

```bash
oo connector run "convex" --action "delete_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Convex data. Always confirm the target and get explicit user approval before running.

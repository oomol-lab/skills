# Neon · `delete_branch`

Delete a branch from a Neon project.

- **Service**: `neon`
- **Action**: `delete_branch`
- **Action id**: `neon.delete_branch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "delete_branch"
```

## Run

```bash
oo connector run "neon" --action "delete_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Neon data. Always confirm the target and get explicit user approval before running.

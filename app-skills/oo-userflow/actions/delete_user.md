# Userflow · `delete_user`

Delete one Userflow user by ID.

- **Service**: `userflow`
- **Action**: `delete_user`
- **Action id**: `userflow.delete_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "delete_user"
```

## Run

```bash
oo connector run "userflow" --action "delete_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Userflow data. Always confirm the target and get explicit user approval before running.

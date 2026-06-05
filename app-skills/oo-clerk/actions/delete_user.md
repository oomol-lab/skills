# Clerk · `delete_user`

Delete a Clerk user.

- **Service**: `clerk`
- **Action**: `delete_user`
- **Action id**: `clerk.delete_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "delete_user"
```

## Run

```bash
oo connector run "clerk" --action "delete_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Clerk data. Always confirm the target and get explicit user approval before running.

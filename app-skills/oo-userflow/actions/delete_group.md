# Userflow · `delete_group`

Delete one Userflow group by ID.

- **Service**: `userflow`
- **Action**: `delete_group`
- **Action id**: `userflow.delete_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "delete_group"
```

## Run

```bash
oo connector run "userflow" --action "delete_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Userflow data. Always confirm the target and get explicit user approval before running.

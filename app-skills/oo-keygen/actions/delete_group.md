# Keygen · `delete_group`

Delete a group from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `delete_group`
- **Action id**: `keygen.delete_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "delete_group"
```

## Run

```bash
oo connector run "keygen" --action "delete_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Keygen data. Always confirm the target and get explicit user approval before running.

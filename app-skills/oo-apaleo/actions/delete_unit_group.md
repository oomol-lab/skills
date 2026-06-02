# apaleo · `delete_unit_group`

Delete a unit group by ID.

- **Service**: `apaleo`
- **Action**: `delete_unit_group`
- **Action id**: `apaleo.delete_unit_group`
- **Required scopes**: apaleo.unit_groups.delete

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "delete_unit_group"
```

## Run

```bash
oo connector run "apaleo" --action "delete_unit_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites apaleo data. Always confirm the target and get explicit user approval before running.

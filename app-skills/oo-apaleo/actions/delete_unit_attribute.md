# apaleo · `delete_unit_attribute`

Delete a unit attribute definition by ID.

- **Service**: `apaleo`
- **Action**: `delete_unit_attribute`
- **Action id**: `apaleo.delete_unit_attribute`
- **Required scopes**: apaleo.unit_attributes.delete

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "delete_unit_attribute"
```

## Run

```bash
oo connector run "apaleo" --action "delete_unit_attribute" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites apaleo data. Always confirm the target and get explicit user approval before running.

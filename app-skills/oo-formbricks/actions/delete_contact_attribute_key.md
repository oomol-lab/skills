# Formbricks · `delete_contact_attribute_key`

Delete one Formbricks contact attribute key by its identifier.

- **Service**: `formbricks`
- **Action**: `delete_contact_attribute_key`
- **Action id**: `formbricks.delete_contact_attribute_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "delete_contact_attribute_key"
```

## Run

```bash
oo connector run "formbricks" --action "delete_contact_attribute_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Formbricks data. Always confirm the target and get explicit user approval before running.

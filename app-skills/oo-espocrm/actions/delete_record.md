# EspoCRM · `delete_record`

Delete one EspoCRM record by entity type and record identifier.

- **Service**: `espocrm`
- **Action**: `delete_record`
- **Action id**: `espocrm.delete_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "delete_record"
```

## Run

```bash
oo connector run "espocrm" --action "delete_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites EspoCRM data. Always confirm the target and get explicit user approval before running.

# Capsule CRM · `delete_party`

Delete a Capsule CRM party.

- **Service**: `capsule_crm`
- **Action**: `delete_party`
- **Action id**: `capsule_crm.delete_party`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "delete_party"
```

## Run

```bash
oo connector run "capsule_crm" --action "delete_party" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Capsule CRM data. Always confirm the target and get explicit user approval before running.

# SendFox · `delete_contact_list`

Soft-delete a SendFox contact list when it is not used by dependent resources.

- **Service**: `sendfox`
- **Action**: `delete_contact_list`
- **Action id**: `sendfox.delete_contact_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "delete_contact_list"
```

## Run

```bash
oo connector run "sendfox" --action "delete_contact_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites SendFox data. Always confirm the target and get explicit user approval before running.

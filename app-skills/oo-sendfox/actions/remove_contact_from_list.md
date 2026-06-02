# SendFox · `remove_contact_from_list`

Remove a SendFox contact from a contact list.

- **Service**: `sendfox`
- **Action**: `remove_contact_from_list`
- **Action id**: `sendfox.remove_contact_from_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "remove_contact_from_list"
```

## Run

```bash
oo connector run "sendfox" --action "remove_contact_from_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites SendFox data. Always confirm the target and get explicit user approval before running.

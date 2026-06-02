# EmailOctopus · `delete_list_contact`

Delete a contact from an EmailOctopus mailing list.

- **Service**: `emailoctopus`
- **Action**: `delete_list_contact`
- **Action id**: `emailoctopus.delete_list_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "delete_list_contact"
```

## Run

```bash
oo connector run "emailoctopus" --action "delete_list_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites EmailOctopus data. Always confirm the target and get explicit user approval before running.

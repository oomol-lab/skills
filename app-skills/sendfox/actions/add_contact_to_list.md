# SendFox · `add_contact_to_list`

Add an existing SendFox contact to a contact list.

- **Service**: `sendfox`
- **Action**: `add_contact_to_list`
- **Action id**: `sendfox.add_contact_to_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "add_contact_to_list"
```

## Run

```bash
oo connector run "sendfox" --action "add_contact_to_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SendFox state. Confirm the exact payload and intended effect with the user before running.

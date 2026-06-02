# SendFox · `update_contact_list`

Update a SendFox contact list name.

- **Service**: `sendfox`
- **Action**: `update_contact_list`
- **Action id**: `sendfox.update_contact_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "update_contact_list"
```

## Run

```bash
oo connector run "sendfox" --action "update_contact_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SendFox state. Confirm the exact payload and intended effect with the user before running.

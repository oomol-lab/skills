# SendFox · `list_contacts_in_list`

List contacts in a SendFox contact list with optional search filtering.

- **Service**: `sendfox`
- **Action**: `list_contacts_in_list`
- **Action id**: `sendfox.list_contacts_in_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "list_contacts_in_list"
```

## Run

```bash
oo connector run "sendfox" --action "list_contacts_in_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

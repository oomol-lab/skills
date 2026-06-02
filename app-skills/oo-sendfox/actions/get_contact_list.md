# SendFox · `get_contact_list`

Get a SendFox contact list by ID.

- **Service**: `sendfox`
- **Action**: `get_contact_list`
- **Action id**: `sendfox.get_contact_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "get_contact_list"
```

## Run

```bash
oo connector run "sendfox" --action "get_contact_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

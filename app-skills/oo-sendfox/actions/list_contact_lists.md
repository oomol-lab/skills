# SendFox · `list_contact_lists`

List SendFox contact lists with optional search filtering.

- **Service**: `sendfox`
- **Action**: `list_contact_lists`
- **Action id**: `sendfox.list_contact_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "list_contact_lists"
```

## Run

```bash
oo connector run "sendfox" --action "list_contact_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

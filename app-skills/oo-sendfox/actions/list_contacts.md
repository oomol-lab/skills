# SendFox · `list_contacts`

List SendFox contacts with optional search, email, and unsubscribe filters.

- **Service**: `sendfox`
- **Action**: `list_contacts`
- **Action id**: `sendfox.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "list_contacts"
```

## Run

```bash
oo connector run "sendfox" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

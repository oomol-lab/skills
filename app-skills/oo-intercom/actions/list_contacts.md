# Intercom · `list_contacts`

List Intercom contacts with cursor-based pagination.

- **Service**: `intercom`
- **Action**: `list_contacts`
- **Action id**: `intercom.list_contacts`
- **Required scopes**: intercom.contacts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "list_contacts"
```

## Run

```bash
oo connector run "intercom" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

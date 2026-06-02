# Intercom · `search_contacts`

Search Intercom contacts with the official search DSL.

- **Service**: `intercom`
- **Action**: `search_contacts`
- **Action id**: `intercom.search_contacts`
- **Required scopes**: intercom.contacts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "search_contacts"
```

## Run

```bash
oo connector run "intercom" --action "search_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

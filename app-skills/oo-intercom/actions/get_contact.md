# Intercom · `get_contact`

Get a single Intercom contact by identifier.

- **Service**: `intercom`
- **Action**: `get_contact`
- **Action id**: `intercom.get_contact`
- **Required scopes**: intercom.contacts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "get_contact"
```

## Run

```bash
oo connector run "intercom" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

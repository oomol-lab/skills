# Intercom · `get_contact_by_external_id`

Get a single Intercom contact by external ID.

- **Service**: `intercom`
- **Action**: `get_contact_by_external_id`
- **Action id**: `intercom.get_contact_by_external_id`
- **Required scopes**: intercom.contacts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "get_contact_by_external_id"
```

## Run

```bash
oo connector run "intercom" --action "get_contact_by_external_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

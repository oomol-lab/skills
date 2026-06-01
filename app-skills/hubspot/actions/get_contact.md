# HubSpot · `get_contact`

Get a HubSpot contact by record ID or by a custom idProperty value.

- **Service**: `hubspot`
- **Action**: `get_contact`
- **Action id**: `hubspot.get_contact`
- **Required scopes**: hubspot.contacts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "get_contact"
```

## Run

```bash
oo connector run "hubspot" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

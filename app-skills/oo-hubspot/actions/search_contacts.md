# HubSpot · `search_contacts`

Search HubSpot contacts with optional filters, sorting, and selected properties.

- **Service**: `hubspot`
- **Action**: `search_contacts`
- **Action id**: `hubspot.search_contacts`
- **Required scopes**: hubspot.contacts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "search_contacts"
```

## Run

```bash
oo connector run "hubspot" --action "search_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

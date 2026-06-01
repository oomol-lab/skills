# HubSpot · `create_contact`

Create a HubSpot contact with the provided properties and optional associations.

- **Service**: `hubspot`
- **Action**: `create_contact`
- **Action id**: `hubspot.create_contact`
- **Required scopes**: hubspot.contacts.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "create_contact"
```

## Run

```bash
oo connector run "hubspot" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HubSpot state. Confirm the exact payload and intended effect with the user before running.

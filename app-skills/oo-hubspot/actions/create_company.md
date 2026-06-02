# HubSpot · `create_company`

Create a HubSpot company with the provided properties and optional associations.

- **Service**: `hubspot`
- **Action**: `create_company`
- **Action id**: `hubspot.create_company`
- **Required scopes**: hubspot.companies.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "create_company"
```

## Run

```bash
oo connector run "hubspot" --action "create_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HubSpot state. Confirm the exact payload and intended effect with the user before running.

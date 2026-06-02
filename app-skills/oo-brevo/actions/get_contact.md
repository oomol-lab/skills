# Brevo · `get_contact`

Retrieve one Brevo contact by identifier and optional identifier type.

- **Service**: `brevo`
- **Action**: `get_contact`
- **Action id**: `brevo.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "get_contact"
```

## Run

```bash
oo connector run "brevo" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Brevo · `delete_contact`

Delete one Brevo contact by identifier and optional identifier type.

- **Service**: `brevo`
- **Action**: `delete_contact`
- **Action id**: `brevo.delete_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "delete_contact"
```

## Run

```bash
oo connector run "brevo" --action "delete_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Brevo data. Always confirm the target and get explicit user approval before running.

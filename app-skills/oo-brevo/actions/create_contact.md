# Brevo · `create_contact`

Create one Brevo contact with the official contact creation payload.

- **Service**: `brevo`
- **Action**: `create_contact`
- **Action id**: `brevo.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "create_contact"
```

## Run

```bash
oo connector run "brevo" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Brevo state. Confirm the exact payload and intended effect with the user before running.

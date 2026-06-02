# Brevo · `update_contact_list`

Update one Brevo contact list by ID.

- **Service**: `brevo`
- **Action**: `update_contact_list`
- **Action id**: `brevo.update_contact_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "update_contact_list"
```

## Run

```bash
oo connector run "brevo" --action "update_contact_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Brevo state. Confirm the exact payload and intended effect with the user before running.

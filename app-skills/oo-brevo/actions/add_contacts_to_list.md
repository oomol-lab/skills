# Brevo · `add_contacts_to_list`

Add contacts to one Brevo contact list using exactly one official selector.

- **Service**: `brevo`
- **Action**: `add_contacts_to_list`
- **Action id**: `brevo.add_contacts_to_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "add_contacts_to_list"
```

## Run

```bash
oo connector run "brevo" --action "add_contacts_to_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Brevo state. Confirm the exact payload and intended effect with the user before running.

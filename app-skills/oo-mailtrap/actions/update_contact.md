# Mailtrap · `update_contact`

Update one Mailtrap contact by UUID or email.

- **Service**: `mailtrap`
- **Action**: `update_contact`
- **Action id**: `mailtrap.update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "update_contact"
```

## Run

```bash
oo connector run "mailtrap" --action "update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.

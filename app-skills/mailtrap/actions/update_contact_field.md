# Mailtrap · `update_contact_field`

Update one Mailtrap contact field.

- **Service**: `mailtrap`
- **Action**: `update_contact_field`
- **Action id**: `mailtrap.update_contact_field`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "update_contact_field"
```

## Run

```bash
oo connector run "mailtrap" --action "update_contact_field" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.

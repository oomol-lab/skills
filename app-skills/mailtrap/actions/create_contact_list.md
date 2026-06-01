# Mailtrap · `create_contact_list`

Create one Mailtrap contact list.

- **Service**: `mailtrap`
- **Action**: `create_contact_list`
- **Action id**: `mailtrap.create_contact_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "create_contact_list"
```

## Run

```bash
oo connector run "mailtrap" --action "create_contact_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.

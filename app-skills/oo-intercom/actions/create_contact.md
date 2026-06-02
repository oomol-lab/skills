# Intercom · `create_contact`

Create a new Intercom contact.

- **Service**: `intercom`
- **Action**: `create_contact`
- **Action id**: `intercom.create_contact`
- **Required scopes**: intercom.contacts.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "create_contact"
```

## Run

```bash
oo connector run "intercom" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Intercom state. Confirm the exact payload and intended effect with the user before running.

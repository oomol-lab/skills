# Superchat · `create_contact`

Create one Superchat contact with handles and optional custom attributes.

- **Service**: `superchat`
- **Action**: `create_contact`
- **Action id**: `superchat.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "create_contact"
```

## Run

```bash
oo connector run "superchat" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Superchat state. Confirm the exact payload and intended effect with the user before running.

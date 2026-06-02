# Superchat · `update_contact`

Update one Superchat contact by contact_id.

- **Service**: `superchat`
- **Action**: `update_contact`
- **Action id**: `superchat.update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "update_contact"
```

## Run

```bash
oo connector run "superchat" --action "update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Superchat state. Confirm the exact payload and intended effect with the user before running.

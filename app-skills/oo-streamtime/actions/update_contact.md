# Streamtime · `update_contact`

Update a Streamtime contact by ID.

- **Service**: `streamtime`
- **Action**: `update_contact`
- **Action id**: `streamtime.update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "update_contact"
```

## Run

```bash
oo connector run "streamtime" --action "update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Streamtime state. Confirm the exact payload and intended effect with the user before running.

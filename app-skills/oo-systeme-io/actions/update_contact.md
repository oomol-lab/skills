# Systeme.io · `update_contact`

Update an existing contact in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `update_contact`
- **Action id**: `systeme_io.update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "update_contact"
```

## Run

```bash
oo connector run "systeme_io" --action "update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Systeme.io state. Confirm the exact payload and intended effect with the user before running.

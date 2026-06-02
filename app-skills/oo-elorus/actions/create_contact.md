# Elorus · `create_contact`

Create one Elorus contact in the selected organization.

- **Service**: `elorus`
- **Action**: `create_contact`
- **Action id**: `elorus.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "create_contact"
```

## Run

```bash
oo connector run "elorus" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Elorus state. Confirm the exact payload and intended effect with the user before running.

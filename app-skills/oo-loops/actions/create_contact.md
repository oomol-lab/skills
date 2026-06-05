# Loops · `create_contact`

Create a Loops contact with default and custom contact properties.

- **Service**: `loops`
- **Action**: `create_contact`
- **Action id**: `loops.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "create_contact"
```

## Run

```bash
oo connector run "loops" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Loops state. Confirm the exact payload and intended effect with the user before running.

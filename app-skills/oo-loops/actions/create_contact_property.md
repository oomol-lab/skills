# Loops · `create_contact_property`

Create a custom contact property in Loops.

- **Service**: `loops`
- **Action**: `create_contact_property`
- **Action id**: `loops.create_contact_property`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "create_contact_property"
```

## Run

```bash
oo connector run "loops" --action "create_contact_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Loops state. Confirm the exact payload and intended effect with the user before running.

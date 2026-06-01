# Refiner · `add_contact_to_segment`

Add a Refiner contact to a manual segment.

- **Service**: `refiner`
- **Action**: `add_contact_to_segment`
- **Action id**: `refiner.add_contact_to_segment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "add_contact_to_segment"
```

## Run

```bash
oo connector run "refiner" --action "add_contact_to_segment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Refiner state. Confirm the exact payload and intended effect with the user before running.

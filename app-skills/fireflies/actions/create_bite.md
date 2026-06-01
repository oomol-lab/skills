# Fireflies · `create_bite`

Create a Fireflies bite from a transcript time range.

- **Service**: `fireflies`
- **Action**: `create_bite`
- **Action id**: `fireflies.create_bite`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "create_bite"
```

## Run

```bash
oo connector run "fireflies" --action "create_bite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Fireflies state. Confirm the exact payload and intended effect with the user before running.

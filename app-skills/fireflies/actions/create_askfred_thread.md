# Fireflies · `create_askfred_thread`

Create a Fireflies AskFred thread from a meeting question.

- **Service**: `fireflies`
- **Action**: `create_askfred_thread`
- **Action id**: `fireflies.create_askfred_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "create_askfred_thread"
```

## Run

```bash
oo connector run "fireflies" --action "create_askfred_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Fireflies state. Confirm the exact payload and intended effect with the user before running.

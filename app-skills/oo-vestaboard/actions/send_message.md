# Vestaboard · `send_message`

Send a new Vestaboard message as plain text or as a two-dimensional character-code grid.

- **Service**: `vestaboard`
- **Action**: `send_message`
- **Action id**: `vestaboard.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vestaboard" --action "send_message"
```

## Run

```bash
oo connector run "vestaboard" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vestaboard state. Confirm the exact payload and intended effect with the user before running.

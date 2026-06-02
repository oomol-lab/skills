# Vestaboard · `set_transition`

Update the Vestaboard transition style and transition speed.

- **Service**: `vestaboard`
- **Action**: `set_transition`
- **Action id**: `vestaboard.set_transition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vestaboard" --action "set_transition"
```

## Run

```bash
oo connector run "vestaboard" --action "set_transition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vestaboard state. Confirm the exact payload and intended effect with the user before running.

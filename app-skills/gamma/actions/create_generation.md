# Gamma · `create_generation`

Create an asynchronous Gamma generation from text input.

- **Service**: `gamma`
- **Action**: `create_generation`
- **Action id**: `gamma.create_generation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gamma" --action "create_generation"
```

## Run

```bash
oo connector run "gamma" --action "create_generation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gamma state. Confirm the exact payload and intended effect with the user before running.

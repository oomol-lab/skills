# Mistral AI · `create_library`

Create a new Mistral library.

- **Service**: `mistral_ai`
- **Action**: `create_library`
- **Action id**: `mistral_ai.create_library`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_library"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_library" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

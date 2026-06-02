# Mistral AI · `update_library`

Updates the properties of the specified library.

- **Service**: `mistral_ai`
- **Action**: `update_library`
- **Action id**: `mistral_ai.update_library`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "update_library"
```

## Run

```bash
oo connector run "mistral_ai" --action "update_library" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

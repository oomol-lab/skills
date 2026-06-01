# Mistral AI · `create_agent`

Create a new Mistral Agent.

- **Service**: `mistral_ai`
- **Action**: `create_agent`
- **Action id**: `mistral_ai.create_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_agent"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

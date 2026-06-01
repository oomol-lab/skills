# Mistral AI · `create_agents_completion`

Call the Mistral agents completions interface to generate Agent responses.

- **Service**: `mistral_ai`
- **Action**: `create_agents_completion`
- **Action id**: `mistral_ai.create_agents_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_agents_completion"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_agents_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

# Mistral AI · `create_fim_completion`

Call the Mistral FIM completions interface to generate completion results.

- **Service**: `mistral_ai`
- **Action**: `create_fim_completion`
- **Action id**: `mistral_ai.create_fim_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_fim_completion"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_fim_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

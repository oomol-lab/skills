# Mistral AI · `create_moderation`

Call the Mistral moderations interface to detect text security risks.

- **Service**: `mistral_ai`
- **Action**: `create_moderation`
- **Action id**: `mistral_ai.create_moderation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_moderation"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_moderation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

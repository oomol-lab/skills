# Mistral AI · `update_agent`

Update the Agent configuration and create a new version.

- **Service**: `mistral_ai`
- **Action**: `update_agent`
- **Action id**: `mistral_ai.update_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "update_agent"
```

## Run

```bash
oo connector run "mistral_ai" --action "update_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

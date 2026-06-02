# Mistral AI · `create_or_update_agent_alias`

Create or update an Agent version alias.

- **Service**: `mistral_ai`
- **Action**: `create_or_update_agent_alias`
- **Action id**: `mistral_ai.create_or_update_agent_alias`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_or_update_agent_alias"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_or_update_agent_alias" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.

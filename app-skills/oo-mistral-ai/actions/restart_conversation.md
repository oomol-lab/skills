# Mistral AI · `restart_conversation`

Restarts the session from some historical point in the session and generates a new subsequent response.

- **Service**: `mistral_ai`
- **Action**: `restart_conversation`
- **Action id**: `mistral_ai.restart_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "restart_conversation"
```

## Run

```bash
oo connector run "mistral_ai" --action "restart_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

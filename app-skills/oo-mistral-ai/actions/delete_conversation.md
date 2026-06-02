# Mistral AI · `delete_conversation`

Delete the specified session.

- **Service**: `mistral_ai`
- **Action**: `delete_conversation`
- **Action id**: `mistral_ai.delete_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "delete_conversation"
```

## Run

```bash
oo connector run "mistral_ai" --action "delete_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mistral AI data. Always confirm the target and get explicit user approval before running.

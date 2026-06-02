# OpenRouter · `list_user_models`

List models filtered by the current user's OpenRouter routing preferences, privacy settings, and guardrails.

- **Service**: `openrouter`
- **Action**: `list_user_models`
- **Action id**: `openrouter.list_user_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "list_user_models"
```

## Run

```bash
oo connector run "openrouter" --action "list_user_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

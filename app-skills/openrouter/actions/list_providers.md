# OpenRouter · `list_providers`

List the model providers currently available through OpenRouter.

- **Service**: `openrouter`
- **Action**: `list_providers`
- **Action id**: `openrouter.list_providers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "list_providers"
```

## Run

```bash
oo connector run "openrouter" --action "list_providers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

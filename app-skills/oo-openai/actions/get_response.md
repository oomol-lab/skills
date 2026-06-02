# OpenAI · `get_response`

Retrieve one stored OpenAI response by its identifier.

- **Service**: `openai`
- **Action**: `get_response`
- **Action id**: `openai.get_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "get_response"
```

## Run

```bash
oo connector run "openai" --action "get_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

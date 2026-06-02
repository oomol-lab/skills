# OpenAI · `get_batch`

Fetch one OpenAI batch job by its identifier.

- **Service**: `openai`
- **Action**: `get_batch`
- **Action id**: `openai.get_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "get_batch"
```

## Run

```bash
oo connector run "openai" --action "get_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

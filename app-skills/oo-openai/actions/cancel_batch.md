# OpenAI · `cancel_batch`

Cancel one OpenAI batch job by its identifier.

- **Service**: `openai`
- **Action**: `cancel_batch`
- **Action id**: `openai.cancel_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "cancel_batch"
```

## Run

```bash
oo connector run "openai" --action "cancel_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

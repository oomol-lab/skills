# OpenAI · `get_input_token_counts`

Count how many input tokens a Responses-style OpenAI request would consume.

- **Service**: `openai`
- **Action**: `get_input_token_counts`
- **Action id**: `openai.get_input_token_counts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "get_input_token_counts"
```

## Run

```bash
oo connector run "openai" --action "get_input_token_counts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

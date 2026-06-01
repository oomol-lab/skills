# Gemini · `count_tokens`

Count the Gemini token usage for input text.

- **Service**: `gemini`
- **Action**: `count_tokens`
- **Action id**: `gemini.count_tokens`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "count_tokens"
```

## Run

```bash
oo connector run "gemini" --action "count_tokens" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

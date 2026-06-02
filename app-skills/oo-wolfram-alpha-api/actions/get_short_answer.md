# Wolfram|Alpha · `get_short_answer`

Get a concise short answer from Wolfram|Alpha.

- **Service**: `wolfram_alpha_api`
- **Action**: `get_short_answer`
- **Action id**: `wolfram_alpha_api.get_short_answer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wolfram_alpha_api" --action "get_short_answer"
```

## Run

```bash
oo connector run "wolfram_alpha_api" --action "get_short_answer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

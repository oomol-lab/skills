# Wolfram|Alpha · `get_spoken_result`

Get a spoken-style single-sentence result from Wolfram|Alpha.

- **Service**: `wolfram_alpha_api`
- **Action**: `get_spoken_result`
- **Action id**: `wolfram_alpha_api.get_spoken_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wolfram_alpha_api" --action "get_spoken_result"
```

## Run

```bash
oo connector run "wolfram_alpha_api" --action "get_spoken_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

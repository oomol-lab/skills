# Wolfram|Alpha · `validate_query`

Validate whether Wolfram|Alpha can interpret a query.

- **Service**: `wolfram_alpha_api`
- **Action**: `validate_query`
- **Action id**: `wolfram_alpha_api.validate_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wolfram_alpha_api" --action "validate_query"
```

## Run

```bash
oo connector run "wolfram_alpha_api" --action "validate_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

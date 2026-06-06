# Alpha Vantage · `call_official_function`

Call a documented Alpha Vantage query function with raw JSON-facing parameters for advanced coverage.

- **Service**: `alpha_vantage`
- **Action**: `call_official_function`
- **Action id**: `alpha_vantage.call_official_function`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "call_official_function"
```

## Run

```bash
oo connector run "alpha_vantage" --action "call_official_function" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

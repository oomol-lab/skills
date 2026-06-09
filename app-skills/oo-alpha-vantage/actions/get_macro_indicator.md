# Alpha Vantage · `get_macro_indicator`

Retrieve raw macroeconomic indicator data from Alpha Vantage.

- **Service**: `alpha_vantage`
- **Action**: `get_macro_indicator`
- **Action id**: `alpha_vantage.get_macro_indicator`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_macro_indicator"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_macro_indicator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

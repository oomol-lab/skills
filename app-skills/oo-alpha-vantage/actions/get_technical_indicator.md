# Alpha Vantage · `get_technical_indicator`

Retrieve raw technical indicator data using an official Alpha Vantage indicator function.

- **Service**: `alpha_vantage`
- **Action**: `get_technical_indicator`
- **Action id**: `alpha_vantage.get_technical_indicator`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_technical_indicator"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_technical_indicator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

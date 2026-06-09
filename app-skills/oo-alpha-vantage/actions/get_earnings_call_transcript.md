# Alpha Vantage · `get_earnings_call_transcript`

Retrieve a raw earnings call transcript for a symbol, quarter, and fiscal year.

- **Service**: `alpha_vantage`
- **Action**: `get_earnings_call_transcript`
- **Action id**: `alpha_vantage.get_earnings_call_transcript`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_earnings_call_transcript"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_earnings_call_transcript" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

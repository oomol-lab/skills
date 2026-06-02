# Nasdaq Data Link · `get_dividend_history`

Retrieve quarterly dividend fundamentals for a ticker from SHARADAR/SF1 using the ARQ dimension.

- **Service**: `nasdaq`
- **Action**: `get_dividend_history`
- **Action id**: `nasdaq.get_dividend_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_dividend_history"
```

## Run

```bash
oo connector run "nasdaq" --action "get_dividend_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

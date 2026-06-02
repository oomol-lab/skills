# Nasdaq Data Link · `get_end_of_day_quote`

Retrieve QuoteMedia end-of-day price rows for a ticker, optionally filtered by a date range.

- **Service**: `nasdaq`
- **Action**: `get_end_of_day_quote`
- **Action id**: `nasdaq.get_end_of_day_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_end_of_day_quote"
```

## Run

```bash
oo connector run "nasdaq" --action "get_end_of_day_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

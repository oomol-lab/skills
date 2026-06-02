# Nasdaq Data Link · `get_real_time_quote`

Compatibility alias of get_end_of_day_quote. Returns QuoteMedia end-of-day price rows rather than live real-time quotes.

- **Service**: `nasdaq`
- **Action**: `get_real_time_quote`
- **Action id**: `nasdaq.get_real_time_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_real_time_quote"
```

## Run

```bash
oo connector run "nasdaq" --action "get_real_time_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

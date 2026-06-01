# Marketstack · `get_ticker_info`

Get profile information for a single Marketstack ticker.

- **Service**: `marketstack`
- **Action**: `get_ticker_info`
- **Action id**: `marketstack.get_ticker_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "marketstack" --action "get_ticker_info"
```

## Run

```bash
oo connector run "marketstack" --action "get_ticker_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Marketstack · `list_tickers`

List Marketstack tickers with optional search, exchange, and pagination filters.

- **Service**: `marketstack`
- **Action**: `list_tickers`
- **Action id**: `marketstack.list_tickers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "marketstack" --action "list_tickers"
```

## Run

```bash
oo connector run "marketstack" --action "list_tickers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

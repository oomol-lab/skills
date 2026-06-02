# Marketstack · `get_historical_eod`

Get historical end-of-day data from Marketstack for one or more comma-separated symbols.

- **Service**: `marketstack`
- **Action**: `get_historical_eod`
- **Action id**: `marketstack.get_historical_eod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "marketstack" --action "get_historical_eod"
```

## Run

```bash
oo connector run "marketstack" --action "get_historical_eod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

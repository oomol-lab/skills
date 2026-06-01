# Marketstack · `get_latest_eod`

Get the latest available end-of-day data for a single Marketstack symbol.

- **Service**: `marketstack`
- **Action**: `get_latest_eod`
- **Action id**: `marketstack.get_latest_eod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "marketstack" --action "get_latest_eod"
```

## Run

```bash
oo connector run "marketstack" --action "get_latest_eod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Finage · `get_aggregates`

Get Finage OHLCV aggregate bars for a U.S. stock over a date range.

- **Service**: `finage`
- **Action**: `get_aggregates`
- **Action id**: `finage.get_aggregates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "finage" --action "get_aggregates"
```

## Run

```bash
oo connector run "finage" --action "get_aggregates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Fixer · `get_historical_rates`

Retrieve historical Fixer exchange rates for a specific date.

- **Service**: `fixer`
- **Action**: `get_historical_rates`
- **Action id**: `fixer.get_historical_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fixer" --action "get_historical_rates"
```

## Run

```bash
oo connector run "fixer" --action "get_historical_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

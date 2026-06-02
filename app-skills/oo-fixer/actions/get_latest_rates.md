# Fixer · `get_latest_rates`

Retrieve the latest Fixer exchange rates for all or selected currencies.

- **Service**: `fixer`
- **Action**: `get_latest_rates`
- **Action id**: `fixer.get_latest_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fixer" --action "get_latest_rates"
```

## Run

```bash
oo connector run "fixer" --action "get_latest_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

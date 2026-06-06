# Signalbase · `list_funding_signals`

Fetch Signalbase funding signals with date, company, investor, amount, and sorting filters.

- **Service**: `signalbase`
- **Action**: `list_funding_signals`
- **Action id**: `signalbase.list_funding_signals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signalbase" --action "list_funding_signals"
```

## Run

```bash
oo connector run "signalbase" --action "list_funding_signals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

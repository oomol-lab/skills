# Signalbase · `list_acquisition_signals`

Fetch Signalbase acquisition signals with date, company, acquirer, amount, and sorting filters.

- **Service**: `signalbase`
- **Action**: `list_acquisition_signals`
- **Action id**: `signalbase.list_acquisition_signals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signalbase" --action "list_acquisition_signals"
```

## Run

```bash
oo connector run "signalbase" --action "list_acquisition_signals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Signalbase · `list_hiring_signals`

Fetch Signalbase hiring signals with role, department, seniority, location, and sorting filters.

- **Service**: `signalbase`
- **Action**: `list_hiring_signals`
- **Action id**: `signalbase.list_hiring_signals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signalbase" --action "list_hiring_signals"
```

## Run

```bash
oo connector run "signalbase" --action "list_hiring_signals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

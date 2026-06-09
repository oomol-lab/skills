# Signalbase · `list_companies`

Browse and search Signalbase company profiles with pagination, filters, and sorting.

- **Service**: `signalbase`
- **Action**: `list_companies`
- **Action id**: `signalbase.list_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signalbase" --action "list_companies"
```

## Run

```bash
oo connector run "signalbase" --action "list_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

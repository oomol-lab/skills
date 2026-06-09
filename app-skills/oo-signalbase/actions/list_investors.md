# Signalbase · `list_investors`

Fetch Signalbase investor data with type, location, ticket-size, and sorting filters.

- **Service**: `signalbase`
- **Action**: `list_investors`
- **Action id**: `signalbase.list_investors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signalbase" --action "list_investors"
```

## Run

```bash
oo connector run "signalbase" --action "list_investors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

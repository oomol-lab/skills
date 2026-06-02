# Coinranking · `search_suggestions`

Search Coinranking suggestions by keyword and return grouped entity matches.

- **Service**: `coinranking`
- **Action**: `search_suggestions`
- **Action id**: `coinranking.search_suggestions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinranking" --action "search_suggestions"
```

## Run

```bash
oo connector run "coinranking" --action "search_suggestions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

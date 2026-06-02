# Algolia · `list_indices`

List Algolia indices accessible to the current API key.

- **Service**: `algolia`
- **Action**: `list_indices`
- **Action id**: `algolia.list_indices`
- **Required scopes**: listIndexes

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "list_indices"
```

## Run

```bash
oo connector run "algolia" --action "list_indices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

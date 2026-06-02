# Algolia · `browse_index`

Browse records from a single Algolia index, optionally continuing with a cursor.

- **Service**: `algolia`
- **Action**: `browse_index`
- **Action id**: `algolia.browse_index`
- **Required scopes**: browse

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "browse_index"
```

## Run

```bash
oo connector run "algolia" --action "browse_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

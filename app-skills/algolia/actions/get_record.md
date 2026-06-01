# Algolia · `get_record`

Retrieve a single record from an Algolia index by objectID.

- **Service**: `algolia`
- **Action**: `get_record`
- **Action id**: `algolia.get_record`
- **Required scopes**: search

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "get_record"
```

## Run

```bash
oo connector run "algolia" --action "get_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

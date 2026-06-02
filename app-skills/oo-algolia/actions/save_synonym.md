# Algolia · `save_synonym`

Save a single Algolia synonym by objectID.

- **Service**: `algolia`
- **Action**: `save_synonym`
- **Action id**: `algolia.save_synonym`
- **Required scopes**: settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "save_synonym"
```

## Run

```bash
oo connector run "algolia" --action "save_synonym" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

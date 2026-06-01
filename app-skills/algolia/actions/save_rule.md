# Algolia · `save_rule`

Save a single Algolia rule by objectID.

- **Service**: `algolia`
- **Action**: `save_rule`
- **Action id**: `algolia.save_rule`
- **Required scopes**: settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "save_rule"
```

## Run

```bash
oo connector run "algolia" --action "save_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

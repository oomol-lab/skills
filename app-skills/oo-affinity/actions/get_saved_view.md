# Affinity · `get_saved_view`

Get one Affinity saved view by list ID and saved view ID.

- **Service**: `affinity`
- **Action**: `get_saved_view`
- **Action id**: `affinity.get_saved_view`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "get_saved_view"
```

## Run

```bash
oo connector run "affinity" --action "get_saved_view" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Affinity · `list_saved_views`

List the saved views configured on one Affinity list.

- **Service**: `affinity`
- **Action**: `list_saved_views`
- **Action id**: `affinity.list_saved_views`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_saved_views"
```

## Run

```bash
oo connector run "affinity" --action "list_saved_views" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

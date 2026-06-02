# Affinity · `list_list_fields`

List the field metadata for one Affinity list.

- **Service**: `affinity`
- **Action**: `list_list_fields`
- **Action id**: `affinity.list_list_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_list_fields"
```

## Run

```bash
oo connector run "affinity" --action "list_list_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

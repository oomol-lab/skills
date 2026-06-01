# Affinity · `get_list`

Get one Affinity list by ID.

- **Service**: `affinity`
- **Action**: `get_list`
- **Action id**: `affinity.get_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "get_list"
```

## Run

```bash
oo connector run "affinity" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

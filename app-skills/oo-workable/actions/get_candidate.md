# Workable · `get_candidate`

Get full details for a Workable candidate by candidate ID.

- **Service**: `workable`
- **Action**: `get_candidate`
- **Action id**: `workable.get_candidate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "workable" --action "get_candidate"
```

## Run

```bash
oo connector run "workable" --action "get_candidate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

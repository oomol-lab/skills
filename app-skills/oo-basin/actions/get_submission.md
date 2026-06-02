# Basin · `get_submission`

Fetch a single Basin submission by ID.

- **Service**: `basin`
- **Action**: `get_submission`
- **Action id**: `basin.get_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "get_submission"
```

## Run

```bash
oo connector run "basin" --action "get_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

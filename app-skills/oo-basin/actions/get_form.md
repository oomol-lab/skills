# Basin · `get_form`

Fetch a single Basin form by ID.

- **Service**: `basin`
- **Action**: `get_form`
- **Action id**: `basin.get_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "get_form"
```

## Run

```bash
oo connector run "basin" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Leexi · `list_calls`

List calls and meetings in the current Leexi workspace with optional filters.

- **Service**: `leexi`
- **Action**: `list_calls`
- **Action id**: `leexi.list_calls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leexi" --action "list_calls"
```

## Run

```bash
oo connector run "leexi" --action "list_calls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

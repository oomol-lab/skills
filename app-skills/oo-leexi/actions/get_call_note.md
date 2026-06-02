# Leexi · `get_call_note`

Retrieve one Leexi call note by UUID.

- **Service**: `leexi`
- **Action**: `get_call_note`
- **Action id**: `leexi.get_call_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leexi" --action "get_call_note"
```

## Run

```bash
oo connector run "leexi" --action "get_call_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

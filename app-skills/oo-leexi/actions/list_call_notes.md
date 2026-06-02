# Leexi · `list_call_notes`

List call notes for a Leexi call, optionally filtered by prompt UUID.

- **Service**: `leexi`
- **Action**: `list_call_notes`
- **Action id**: `leexi.list_call_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leexi" --action "list_call_notes"
```

## Run

```bash
oo connector run "leexi" --action "list_call_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

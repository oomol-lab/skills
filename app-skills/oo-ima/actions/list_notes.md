# ima · `list_notes`

List notes in one IMA notebook or across all notes.

- **Service**: `ima`
- **Action**: `list_notes`
- **Action id**: `ima.list_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "list_notes"
```

## Run

```bash
oo connector run "ima" --action "list_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

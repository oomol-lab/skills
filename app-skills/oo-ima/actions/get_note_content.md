# ima · `get_note_content`

Fetch the plain-text or JSON content for one IMA note.

- **Service**: `ima`
- **Action**: `get_note_content`
- **Action id**: `ima.get_note_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "get_note_content"
```

## Run

```bash
oo connector run "ima" --action "get_note_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

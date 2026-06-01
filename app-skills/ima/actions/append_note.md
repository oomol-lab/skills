# ima · `append_note`

Append Markdown content to an existing IMA note.

- **Service**: `ima`
- **Action**: `append_note`
- **Action id**: `ima.append_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "append_note"
```

## Run

```bash
oo connector run "ima" --action "append_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

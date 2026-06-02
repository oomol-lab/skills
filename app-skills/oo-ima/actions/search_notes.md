# ima · `search_notes`

Search IMA notes by title or note body text.

- **Service**: `ima`
- **Action**: `search_notes`
- **Action id**: `ima.search_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "search_notes"
```

## Run

```bash
oo connector run "ima" --action "search_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

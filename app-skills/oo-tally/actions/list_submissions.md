# Tally · `list_submissions`

List submissions for a Tally form with pagination and documented completion/date filters.

- **Service**: `tally`
- **Action**: `list_submissions`
- **Action id**: `tally.list_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tally" --action "list_submissions"
```

## Run

```bash
oo connector run "tally" --action "list_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

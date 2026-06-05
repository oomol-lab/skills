# Fillout · `list_submissions`

List submissions for one Fillout form with documented pagination and filters.

- **Service**: `fillout`
- **Action**: `list_submissions`
- **Action id**: `fillout.list_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fillout" --action "list_submissions"
```

## Run

```bash
oo connector run "fillout" --action "list_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

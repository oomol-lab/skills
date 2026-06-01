# Getform · `list_submissions`

List submissions from one protected Forminit form with pagination, keyword search, optional file metadata, and timezone formatting.

- **Service**: `getform`
- **Action**: `list_submissions`
- **Action id**: `getform.list_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "getform" --action "list_submissions"
```

## Run

```bash
oo connector run "getform" --action "list_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

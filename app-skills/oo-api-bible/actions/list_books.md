# API.Bible · `list_books`

List books for one Bible version from API.Bible.

- **Service**: `api_bible`
- **Action**: `list_books`
- **Action id**: `api_bible.list_books`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_bible" --action "list_books"
```

## Run

```bash
oo connector run "api_bible" --action "list_books" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

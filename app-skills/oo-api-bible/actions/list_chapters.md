# API.Bible · `list_chapters`

List chapters for one book in one Bible version from API.Bible.

- **Service**: `api_bible`
- **Action**: `list_chapters`
- **Action id**: `api_bible.list_chapters`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_bible" --action "list_chapters"
```

## Run

```bash
oo connector run "api_bible" --action "list_chapters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

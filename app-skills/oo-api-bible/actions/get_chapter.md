# API.Bible · `get_chapter`

Retrieve one chapter with configurable display options from API.Bible.

- **Service**: `api_bible`
- **Action**: `get_chapter`
- **Action id**: `api_bible.get_chapter`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_bible" --action "get_chapter"
```

## Run

```bash
oo connector run "api_bible" --action "get_chapter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

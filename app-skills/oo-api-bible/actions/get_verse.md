# API.Bible · `get_verse`

Retrieve one verse with configurable display options from API.Bible.

- **Service**: `api_bible`
- **Action**: `get_verse`
- **Action id**: `api_bible.get_verse`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_bible" --action "get_verse"
```

## Run

```bash
oo connector run "api_bible" --action "get_verse" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

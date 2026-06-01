# API.Bible · `list_verses`

List verses for one chapter in one Bible version from API.Bible.

- **Service**: `api_bible`
- **Action**: `list_verses`
- **Action id**: `api_bible.list_verses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_bible" --action "list_verses"
```

## Run

```bash
oo connector run "api_bible" --action "list_verses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

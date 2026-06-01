# API.Bible · `list_bibles`

List Bible versions from API.Bible with optional language, abbreviation, or name filters.

- **Service**: `api_bible`
- **Action**: `list_bibles`
- **Action id**: `api_bible.list_bibles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_bible" --action "list_bibles"
```

## Run

```bash
oo connector run "api_bible" --action "list_bibles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

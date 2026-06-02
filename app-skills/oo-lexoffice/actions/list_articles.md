# lexoffice · `list_articles`

List Lexoffice articles with optional articleNumber, GTIN, or type filters.

- **Service**: `lexoffice`
- **Action**: `list_articles`
- **Action id**: `lexoffice.list_articles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "list_articles"
```

## Run

```bash
oo connector run "lexoffice" --action "list_articles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

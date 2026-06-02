# Dev.to · `get_article`

Get a Dev.to article by numeric id.

- **Service**: `devto`
- **Action**: `get_article`
- **Action id**: `devto.get_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "get_article"
```

## Run

```bash
oo connector run "devto" --action "get_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

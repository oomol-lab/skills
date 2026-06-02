# Hyperbrowser · `search_web`

Search the web with Hyperbrowser and return structured search results.

- **Service**: `hyperbrowser`
- **Action**: `search_web`
- **Action id**: `hyperbrowser.search_web`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hyperbrowser" --action "search_web"
```

## Run

```bash
oo connector run "hyperbrowser" --action "search_web" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Serply · `google_search`

Search Google through Serply and return web search results in JSON format.

- **Service**: `serply`
- **Action**: `google_search`
- **Action id**: `serply.google_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serply" --action "google_search"
```

## Run

```bash
oo connector run "serply" --action "google_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

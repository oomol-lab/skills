# Serply · `google_scholar_search`

Search Google Scholar through Serply and return academic result entries.

- **Service**: `serply`
- **Action**: `google_scholar_search`
- **Action id**: `serply.google_scholar_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serply" --action "google_scholar_search"
```

## Run

```bash
oo connector run "serply" --action "google_scholar_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

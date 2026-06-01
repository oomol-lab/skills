# DataForSEO · `google_relevant_pages_live`

Retrieve ranking and traffic metrics for the most relevant pages of a domain.

- **Service**: `dataforseo`
- **Action**: `google_relevant_pages_live`
- **Action id**: `dataforseo.google_relevant_pages_live`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "google_relevant_pages_live"
```

## Run

```bash
oo connector run "dataforseo" --action "google_relevant_pages_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

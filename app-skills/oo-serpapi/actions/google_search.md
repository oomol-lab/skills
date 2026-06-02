# SerpApi · `google_search`

Run a Google web search through SerpApi.

- **Service**: `serpapi`
- **Action**: `google_search`
- **Action id**: `serpapi.google_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serpapi" --action "google_search"
```

## Run

```bash
oo connector run "serpapi" --action "google_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

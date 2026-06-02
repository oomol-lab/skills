# Google Search Console · `inspect_url`

Inspect the indexed status of a URL under a Search Console property using Google's URL Inspection API.

- **Service**: `google_search_console`
- **Action**: `inspect_url`
- **Action id**: `google_search_console.inspect_url`
- **Required scopes**: google_search_console.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "inspect_url"
```

## Run

```bash
oo connector run "google_search_console" --action "inspect_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

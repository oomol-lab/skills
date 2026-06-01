# Google Search Console · `submit_sitemap`

Submit a sitemap URL for a Search Console property.

- **Service**: `google_search_console`
- **Action**: `submit_sitemap`
- **Action id**: `google_search_console.submit_sitemap`
- **Required scopes**: google_search_console.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "submit_sitemap"
```

## Run

```bash
oo connector run "google_search_console" --action "submit_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Search Console state. Confirm the exact payload and intended effect with the user before running.

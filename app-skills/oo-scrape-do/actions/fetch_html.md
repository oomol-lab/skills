# Scrape.do · `fetch_html`

Fetch one public URL through Scrape.do and return the synchronous response body.

- **Service**: `scrape_do`
- **Action**: `fetch_html`
- **Action id**: `scrape_do.fetch_html`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrape_do" --action "fetch_html"
```

## Run

```bash
oo connector run "scrape_do" --action "fetch_html" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Hyperbrowser · `fetch_page`

Fetch a web page with Hyperbrowser and return the requested data formats.

- **Service**: `hyperbrowser`
- **Action**: `fetch_page`
- **Action id**: `hyperbrowser.fetch_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hyperbrowser" --action "fetch_page"
```

## Run

```bash
oo connector run "hyperbrowser" --action "fetch_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

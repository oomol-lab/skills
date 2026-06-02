# Prerender · `recache_urls`

Queue one or more URLs for first-time caching or recaching with the Prerender recache API.

- **Service**: `prerender`
- **Action**: `recache_urls`
- **Action id**: `prerender.recache_urls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "prerender" --action "recache_urls"
```

## Run

```bash
oo connector run "prerender" --action "recache_urls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

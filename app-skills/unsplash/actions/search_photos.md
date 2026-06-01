# Unsplash · `search_photos`

Search photos on Unsplash using keyword and filter inputs.

- **Service**: `unsplash`
- **Action**: `search_photos`
- **Action id**: `unsplash.search_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "unsplash" --action "search_photos"
```

## Run

```bash
oo connector run "unsplash" --action "search_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Unsplash · `get_random_photo`

Fetch one or more random Unsplash photos using optional filters.

- **Service**: `unsplash`
- **Action**: `get_random_photo`
- **Action id**: `unsplash.get_random_photo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "unsplash" --action "get_random_photo"
```

## Run

```bash
oo connector run "unsplash" --action "get_random_photo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Beamer · `get_feed_url`

Retrieve the standalone Beamer feed URL with optional language and segmentation filters.

- **Service**: `beamer`
- **Action**: `get_feed_url`
- **Action id**: `beamer.get_feed_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beamer" --action "get_feed_url"
```

## Run

```bash
oo connector run "beamer" --action "get_feed_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Unsplash · `get_topic_photos`

List photos from a specific Unsplash topic.

- **Service**: `unsplash`
- **Action**: `get_topic_photos`
- **Action id**: `unsplash.get_topic_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "unsplash" --action "get_topic_photos"
```

## Run

```bash
oo connector run "unsplash" --action "get_topic_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

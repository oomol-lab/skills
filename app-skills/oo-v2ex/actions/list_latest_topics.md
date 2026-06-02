# V2EX · `list_latest_topics`

Fetch public latest topics from the V2EX legacy JSON API. Responses may be served from V2EX or CDN cache.

- **Service**: `v2ex`
- **Action**: `list_latest_topics`
- **Action id**: `v2ex.list_latest_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "list_latest_topics"
```

## Run

```bash
oo connector run "v2ex" --action "list_latest_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Linux DO · `list_hot_topics`

List public hot/trending topics from Linux DO. RSS endpoint: GET https://linux.do/hot.rss. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network.

- **Service**: `linux_do`
- **Action**: `list_hot_topics`
- **Action id**: `linux_do.list_hot_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_hot_topics"
```

## Run

```bash
oo connector run "linux_do" --action "list_hot_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

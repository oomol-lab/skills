# Linux DO · `list_latest_posts`

List the latest public posts across Linux DO. RSS endpoint: GET https://linux.do/posts.rss. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network.

- **Service**: `linux_do`
- **Action**: `list_latest_posts`
- **Action id**: `linux_do.list_latest_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_latest_posts"
```

## Run

```bash
oo connector run "linux_do" --action "list_latest_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

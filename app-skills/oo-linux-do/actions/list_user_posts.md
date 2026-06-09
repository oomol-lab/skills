# Linux DO · `list_user_posts`

List posts by a Linux DO user. RSS endpoint: GET https://linux.do/u/{username}/activity.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network.

- **Service**: `linux_do`
- **Action**: `list_user_posts`
- **Action id**: `linux_do.list_user_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_user_posts"
```

## Run

```bash
oo connector run "linux_do" --action "list_user_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

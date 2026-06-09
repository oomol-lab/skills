# Linux DO · `list_group_mentions`

List posts mentioning a Linux DO group. RSS endpoint: GET https://linux.do/g/{name}/mentions.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network.

- **Service**: `linux_do`
- **Action**: `list_group_mentions`
- **Action id**: `linux_do.list_group_mentions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_group_mentions"
```

## Run

```bash
oo connector run "linux_do" --action "list_group_mentions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Linux DO · `list_latest_topics`

List the latest public topics from Linux DO's Discourse forum.

- **Service**: `linux_do`
- **Action**: `list_latest_topics`
- **Action id**: `linux_do.list_latest_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_latest_topics"
```

## Run

```bash
oo connector run "linux_do" --action "list_latest_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

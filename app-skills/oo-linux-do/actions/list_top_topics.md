# Linux DO · `list_top_topics`

List public top topics from Linux DO for a time period.

- **Service**: `linux_do`
- **Action**: `list_top_topics`
- **Action id**: `linux_do.list_top_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_top_topics"
```

## Run

```bash
oo connector run "linux_do" --action "list_top_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

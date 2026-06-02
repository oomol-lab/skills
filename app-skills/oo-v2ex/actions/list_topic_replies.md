# V2EX · `list_topic_replies`

Fetch replies for a V2EX topic.

- **Service**: `v2ex`
- **Action**: `list_topic_replies`
- **Action id**: `v2ex.list_topic_replies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "list_topic_replies"
```

## Run

```bash
oo connector run "v2ex" --action "list_topic_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

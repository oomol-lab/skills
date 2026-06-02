# V2EX · `list_node_topics`

Fetch topics from a V2EX node.

- **Service**: `v2ex`
- **Action**: `list_node_topics`
- **Action id**: `v2ex.list_node_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "list_node_topics"
```

## Run

```bash
oo connector run "v2ex" --action "list_node_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

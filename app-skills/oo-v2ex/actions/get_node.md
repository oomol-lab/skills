# V2EX · `get_node`

Fetch a V2EX node by node name.

- **Service**: `v2ex`
- **Action**: `get_node`
- **Action id**: `v2ex.get_node`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "get_node"
```

## Run

```bash
oo connector run "v2ex" --action "get_node" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

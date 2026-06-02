# TiDB Cloud · `get_node_spec`

Fetch one TiDB Cloud Dedicated node spec by region, component type, and key.

- **Service**: `tidb`
- **Action**: `get_node_spec`
- **Action id**: `tidb.get_node_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_node_spec"
```

## Run

```bash
oo connector run "tidb" --action "get_node_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

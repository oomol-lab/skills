# TiDB Cloud · `list_node_specs`

List TiDB Cloud Dedicated node specs available in a region.

- **Service**: `tidb`
- **Action**: `list_node_specs`
- **Action id**: `tidb.list_node_specs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_node_specs"
```

## Run

```bash
oo connector run "tidb" --action "list_node_specs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

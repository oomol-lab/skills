# TiDB Cloud · `show_node_quota`

List TiDB Cloud Dedicated node quotas for the organization.

- **Service**: `tidb`
- **Action**: `show_node_quota`
- **Action id**: `tidb.show_node_quota`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "show_node_quota"
```

## Run

```bash
oo connector run "tidb" --action "show_node_quota" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

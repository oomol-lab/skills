# TiDB Cloud · `show_cloud_providers`

List cloud providers available for TiDB Cloud Dedicated clusters.

- **Service**: `tidb`
- **Action**: `show_cloud_providers`
- **Action id**: `tidb.show_cloud_providers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "show_cloud_providers"
```

## Run

```bash
oo connector run "tidb" --action "show_cloud_providers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

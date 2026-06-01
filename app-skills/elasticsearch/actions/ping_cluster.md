# Elasticsearch · `ping_cluster`

Check whether the Elasticsearch cluster is reachable and return its health status.

- **Service**: `elasticsearch`
- **Action**: `ping_cluster`
- **Action id**: `elasticsearch.ping_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elasticsearch" --action "ping_cluster"
```

## Run

```bash
oo connector run "elasticsearch" --action "ping_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

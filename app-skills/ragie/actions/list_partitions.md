# Ragie · `list_partitions`

List available Ragie partitions and their current limits with cursor pagination.

- **Service**: `ragie`
- **Action**: `list_partitions`
- **Action id**: `ragie.list_partitions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "list_partitions"
```

## Run

```bash
oo connector run "ragie" --action "list_partitions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

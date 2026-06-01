# Ragie · `get_partition`

Get a specific Ragie partition together with its limits and usage stats.

- **Service**: `ragie`
- **Action**: `get_partition`
- **Action id**: `ragie.get_partition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "get_partition"
```

## Run

```bash
oo connector run "ragie" --action "get_partition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

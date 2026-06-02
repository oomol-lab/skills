# Ragie · `list_connections`

List Ragie connections with metadata filtering, pagination, and optional partition scoping.

- **Service**: `ragie`
- **Action**: `list_connections`
- **Action id**: `ragie.list_connections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "list_connections"
```

## Run

```bash
oo connector run "ragie" --action "list_connections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

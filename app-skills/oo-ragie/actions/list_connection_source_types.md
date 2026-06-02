# Ragie · `list_connection_source_types`

List the embedded connector source types that Ragie can authorize and sync through its connections API.

- **Service**: `ragie`
- **Action**: `list_connection_source_types`
- **Action id**: `ragie.list_connection_source_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "list_connection_source_types"
```

## Run

```bash
oo connector run "ragie" --action "list_connection_source_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

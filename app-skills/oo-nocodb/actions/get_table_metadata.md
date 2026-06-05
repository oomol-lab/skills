# NocoDB · `get_table_metadata`

Get metadata for one NocoDB table, including columns and views when available.

- **Service**: `nocodb`
- **Action**: `get_table_metadata`
- **Action id**: `nocodb.get_table_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "get_table_metadata"
```

## Run

```bash
oo connector run "nocodb" --action "get_table_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

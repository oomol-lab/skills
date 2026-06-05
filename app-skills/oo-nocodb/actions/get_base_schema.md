# NocoDB · `get_base_schema`

Get schema metadata for one NocoDB base.

- **Service**: `nocodb`
- **Action**: `get_base_schema`
- **Action id**: `nocodb.get_base_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "get_base_schema"
```

## Run

```bash
oo connector run "nocodb" --action "get_base_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

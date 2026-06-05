# NocoDB · `list_bases`

List bases visible to the connected NocoDB API token.

- **Service**: `nocodb`
- **Action**: `list_bases`
- **Action id**: `nocodb.list_bases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "list_bases"
```

## Run

```bash
oo connector run "nocodb" --action "list_bases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# NocoDB · `read_record`

Read one record from a NocoDB table by record ID.

- **Service**: `nocodb`
- **Action**: `read_record`
- **Action id**: `nocodb.read_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "read_record"
```

## Run

```bash
oo connector run "nocodb" --action "read_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

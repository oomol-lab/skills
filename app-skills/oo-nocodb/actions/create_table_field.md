# NocoDB · `create_table_field`

Create a field in a NocoDB table using the v3 metadata API.

- **Service**: `nocodb`
- **Action**: `create_table_field`
- **Action id**: `nocodb.create_table_field`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "create_table_field"
```

## Run

```bash
oo connector run "nocodb" --action "create_table_field" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes NocoDB state. Confirm the exact payload and intended effect with the user before running.

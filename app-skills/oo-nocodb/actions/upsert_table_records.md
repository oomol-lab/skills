# NocoDB · `upsert_table_records`

Create or update records in a NocoDB table by matching up to three fields using the v3 data API.

- **Service**: `nocodb`
- **Action**: `upsert_table_records`
- **Action id**: `nocodb.upsert_table_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "upsert_table_records"
```

## Run

```bash
oo connector run "nocodb" --action "upsert_table_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes NocoDB state. Confirm the exact payload and intended effect with the user before running.

# NocoDB · `update_records`

Update one or more records in a NocoDB table.

- **Service**: `nocodb`
- **Action**: `update_records`
- **Action id**: `nocodb.update_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "update_records"
```

## Run

```bash
oo connector run "nocodb" --action "update_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes NocoDB state. Confirm the exact payload and intended effect with the user before running.

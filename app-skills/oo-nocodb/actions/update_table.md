# NocoDB · `update_table`

Update a NocoDB table title, description, display field, or metadata using the v3 metadata API.

- **Service**: `nocodb`
- **Action**: `update_table`
- **Action id**: `nocodb.update_table`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "update_table"
```

## Run

```bash
oo connector run "nocodb" --action "update_table" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes NocoDB state. Confirm the exact payload and intended effect with the user before running.

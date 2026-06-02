# Pipedrive · `list_deals`

List Pipedrive deals with optional owner, contact, pipeline, stage, status, and pagination filters.

- **Service**: `pipedrive`
- **Action**: `list_deals`
- **Action id**: `pipedrive.list_deals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "list_deals"
```

## Run

```bash
oo connector run "pipedrive" --action "list_deals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

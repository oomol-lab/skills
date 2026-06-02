# Pipedrive · `list_persons`

List Pipedrive persons with optional owner, organization, deal, custom field, and pagination filters.

- **Service**: `pipedrive`
- **Action**: `list_persons`
- **Action id**: `pipedrive.list_persons`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "list_persons"
```

## Run

```bash
oo connector run "pipedrive" --action "list_persons" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Pipedrive · `list_organizations`

List Pipedrive organizations with optional owner, custom field, and pagination filters.

- **Service**: `pipedrive`
- **Action**: `list_organizations`
- **Action id**: `pipedrive.list_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "list_organizations"
```

## Run

```bash
oo connector run "pipedrive" --action "list_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

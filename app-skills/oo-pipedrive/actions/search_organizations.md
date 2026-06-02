# Pipedrive · `search_organizations`

Search Pipedrive organizations by name, address, notes, or custom fields.

- **Service**: `pipedrive`
- **Action**: `search_organizations`
- **Action id**: `pipedrive.search_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "search_organizations"
```

## Run

```bash
oo connector run "pipedrive" --action "search_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

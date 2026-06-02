# Pipedrive · `get_organization`

Get one Pipedrive organization by organization ID.

- **Service**: `pipedrive`
- **Action**: `get_organization`
- **Action id**: `pipedrive.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "get_organization"
```

## Run

```bash
oo connector run "pipedrive" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Pipedrive · `list_activities`

List Pipedrive activities with optional owner, contact, deal, completion, and pagination filters.

- **Service**: `pipedrive`
- **Action**: `list_activities`
- **Action id**: `pipedrive.list_activities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "list_activities"
```

## Run

```bash
oo connector run "pipedrive" --action "list_activities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Pipedrive · `search_deals`

Search Pipedrive deals by title, notes, or custom fields.

- **Service**: `pipedrive`
- **Action**: `search_deals`
- **Action id**: `pipedrive.search_deals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "search_deals"
```

## Run

```bash
oo connector run "pipedrive" --action "search_deals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

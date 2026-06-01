# Pipedrive · `search_persons`

Search Pipedrive persons by name, email, phone, notes, or custom fields.

- **Service**: `pipedrive`
- **Action**: `search_persons`
- **Action id**: `pipedrive.search_persons`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "search_persons"
```

## Run

```bash
oo connector run "pipedrive" --action "search_persons" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

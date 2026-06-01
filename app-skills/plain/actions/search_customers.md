# Plain · `search_customers`

Search Plain customers with one human-oriented term across full name, short name, email, and external ID.

- **Service**: `plain`
- **Action**: `search_customers`
- **Action id**: `plain.search_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plain" --action "search_customers"
```

## Run

```bash
oo connector run "plain" --action "search_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Plain · `get_customer_by_email`

Fetch one Plain customer by exact email address.

- **Service**: `plain`
- **Action**: `get_customer_by_email`
- **Action id**: `plain.get_customer_by_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plain" --action "get_customer_by_email"
```

## Run

```bash
oo connector run "plain" --action "get_customer_by_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

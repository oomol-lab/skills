# Plain · `get_customer_by_external_id`

Fetch one Plain customer by exact external ID.

- **Service**: `plain`
- **Action**: `get_customer_by_external_id`
- **Action id**: `plain.get_customer_by_external_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plain" --action "get_customer_by_external_id"
```

## Run

```bash
oo connector run "plain" --action "get_customer_by_external_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

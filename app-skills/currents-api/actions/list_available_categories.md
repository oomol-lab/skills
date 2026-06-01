# Currents API · `list_available_categories`

List the news categories currently supported by Currents.

- **Service**: `currents_api`
- **Action**: `list_available_categories`
- **Action id**: `currents_api.list_available_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currents_api" --action "list_available_categories"
```

## Run

```bash
oo connector run "currents_api" --action "list_available_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

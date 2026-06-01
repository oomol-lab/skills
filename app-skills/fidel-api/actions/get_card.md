# Fidel API · `get_card`

Fetch one Fidel card by card ID.

- **Service**: `fidel_api`
- **Action**: `get_card`
- **Action id**: `fidel_api.get_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fidel_api" --action "get_card"
```

## Run

```bash
oo connector run "fidel_api" --action "get_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

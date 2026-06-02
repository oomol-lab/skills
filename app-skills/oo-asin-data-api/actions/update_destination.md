# ASIN Data API · `update_destination`

Update an existing ASIN Data API destination configuration. Only include fields you want to update.

- **Service**: `asin_data_api`
- **Action**: `update_destination`
- **Action id**: `asin_data_api.update_destination`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asin_data_api" --action "update_destination"
```

## Run

```bash
oo connector run "asin_data_api" --action "update_destination" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ASIN Data API state. Confirm the exact payload and intended effect with the user before running.

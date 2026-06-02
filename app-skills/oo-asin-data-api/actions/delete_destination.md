# ASIN Data API · `delete_destination`

Delete a destination from the ASIN Data API account.

- **Service**: `asin_data_api`
- **Action**: `delete_destination`
- **Action id**: `asin_data_api.delete_destination`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asin_data_api" --action "delete_destination"
```

## Run

```bash
oo connector run "asin_data_api" --action "delete_destination" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ASIN Data API data. Always confirm the target and get explicit user approval before running.

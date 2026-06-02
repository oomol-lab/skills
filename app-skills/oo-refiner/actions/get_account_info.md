# Refiner · `get_account_info`

Retrieve the current Refiner account, project, and subscription information.

- **Service**: `refiner`
- **Action**: `get_account_info`
- **Action id**: `refiner.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "get_account_info"
```

## Run

```bash
oo connector run "refiner" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

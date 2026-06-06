# Supadata · `get_account`

Retrieve Supadata organization, plan, and credit usage details.

- **Service**: `supadata`
- **Action**: `get_account`
- **Action id**: `supadata.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "get_account"
```

## Run

```bash
oo connector run "supadata" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

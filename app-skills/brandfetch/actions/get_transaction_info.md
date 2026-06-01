# Brandfetch · `get_transaction_info`

Resolve a raw transaction label into the corresponding Brandfetch merchant brand profile.

- **Service**: `brandfetch`
- **Action**: `get_transaction_info`
- **Action id**: `brandfetch.get_transaction_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brandfetch" --action "get_transaction_info"
```

## Run

```bash
oo connector run "brandfetch" --action "get_transaction_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

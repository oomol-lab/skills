# Keygen · `retrieve_entitlement`

Retrieve one entitlement from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_entitlement`
- **Action id**: `keygen.retrieve_entitlement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_entitlement"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_entitlement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

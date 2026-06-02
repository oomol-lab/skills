# Keygen · `retrieve_policy`

Retrieve one license policy from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_policy`
- **Action id**: `keygen.retrieve_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_policy"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

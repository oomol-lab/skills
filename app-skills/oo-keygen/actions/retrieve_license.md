# Keygen · `retrieve_license`

Retrieve one license from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_license`
- **Action id**: `keygen.retrieve_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_license"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

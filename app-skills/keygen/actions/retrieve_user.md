# Keygen · `retrieve_user`

Retrieve one user from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_user`
- **Action id**: `keygen.retrieve_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_user"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

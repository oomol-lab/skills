# Keygen · `retrieve_group`

Retrieve one group from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_group`
- **Action id**: `keygen.retrieve_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_group"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Keygen · `retrieve_machine`

Retrieve one activated machine from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_machine`
- **Action id**: `keygen.retrieve_machine`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_machine"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_machine" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

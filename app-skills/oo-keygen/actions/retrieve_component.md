# Keygen · `retrieve_component`

Retrieve one machine component from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_component`
- **Action id**: `keygen.retrieve_component`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_component"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_component" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

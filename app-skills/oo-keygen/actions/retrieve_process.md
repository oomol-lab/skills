# Keygen · `retrieve_process`

Retrieve one tracked process from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_process`
- **Action id**: `keygen.retrieve_process`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_process"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_process" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

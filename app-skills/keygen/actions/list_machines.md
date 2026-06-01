# Keygen · `list_machines`

List activated machines in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_machines`
- **Action id**: `keygen.list_machines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_machines"
```

## Run

```bash
oo connector run "keygen" --action "list_machines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

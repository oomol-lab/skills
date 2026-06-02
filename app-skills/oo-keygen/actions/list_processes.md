# Keygen · `list_processes`

List tracked processes in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_processes`
- **Action id**: `keygen.list_processes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_processes"
```

## Run

```bash
oo connector run "keygen" --action "list_processes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

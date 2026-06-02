# Keygen · `list_groups`

List groups in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_groups`
- **Action id**: `keygen.list_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_groups"
```

## Run

```bash
oo connector run "keygen" --action "list_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

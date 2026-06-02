# Keygen · `list_policies`

List license policies in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_policies`
- **Action id**: `keygen.list_policies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_policies"
```

## Run

```bash
oo connector run "keygen" --action "list_policies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Keygen · `list_licenses`

List licenses in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_licenses`
- **Action id**: `keygen.list_licenses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_licenses"
```

## Run

```bash
oo connector run "keygen" --action "list_licenses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

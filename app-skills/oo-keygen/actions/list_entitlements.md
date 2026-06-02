# Keygen · `list_entitlements`

List entitlements in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_entitlements`
- **Action id**: `keygen.list_entitlements`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_entitlements"
```

## Run

```bash
oo connector run "keygen" --action "list_entitlements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

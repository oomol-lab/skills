# Keygen · `list_components`

List machine components in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_components`
- **Action id**: `keygen.list_components`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_components"
```

## Run

```bash
oo connector run "keygen" --action "list_components" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

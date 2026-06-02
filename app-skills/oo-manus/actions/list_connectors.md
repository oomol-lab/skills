# Manus · `list_connectors`

List Manus connectors installed in the current account.

- **Service**: `manus`
- **Action**: `list_connectors`
- **Action id**: `manus.list_connectors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_connectors"
```

## Run

```bash
oo connector run "manus" --action "list_connectors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Longbridge · `list_securities`

List Longbridge tradable securities for a market and category.

- **Service**: `longbridge`
- **Action**: `list_securities`
- **Action id**: `longbridge.list_securities`
- **Required scopes**: longbridge.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "longbridge" --action "list_securities"
```

## Run

```bash
oo connector run "longbridge" --action "list_securities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

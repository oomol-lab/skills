# Certifier · `list_designs`

List Certifier certificate and badge designs with cursor pagination.

- **Service**: `certifier`
- **Action**: `list_designs`
- **Action id**: `certifier.list_designs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "certifier" --action "list_designs"
```

## Run

```bash
oo connector run "certifier" --action "list_designs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Canva · `list_designs`

List metadata for the current Canva user's designs, with optional search, ownership, sorting, and pagination filters.

- **Service**: `canva`
- **Action**: `list_designs`
- **Action id**: `canva.list_designs`
- **Required scopes**: canva.design.meta.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "list_designs"
```

## Run

```bash
oo connector run "canva" --action "list_designs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

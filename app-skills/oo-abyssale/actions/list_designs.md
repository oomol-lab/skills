# Abyssale · `list_designs`

List Abyssale designs available to the API key.

- **Service**: `abyssale`
- **Action**: `list_designs`
- **Action id**: `abyssale.list_designs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "list_designs"
```

## Run

```bash
oo connector run "abyssale" --action "list_designs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

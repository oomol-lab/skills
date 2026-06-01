# Fireflies · `list_bites`

List Fireflies bites using the available bite filters.

- **Service**: `fireflies`
- **Action**: `list_bites`
- **Action id**: `fireflies.list_bites`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_bites"
```

## Run

```bash
oo connector run "fireflies" --action "list_bites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

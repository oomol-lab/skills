# Abyssale · `list_fonts`

List custom and Google fonts available in Abyssale.

- **Service**: `abyssale`
- **Action**: `list_fonts`
- **Action id**: `abyssale.list_fonts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "list_fonts"
```

## Run

```bash
oo connector run "abyssale" --action "list_fonts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

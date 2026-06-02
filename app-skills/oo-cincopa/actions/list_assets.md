# Cincopa · `list_assets`

List assets from a Cincopa account with optional metadata filters.

- **Service**: `cincopa`
- **Action**: `list_assets`
- **Action id**: `cincopa.list_assets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cincopa" --action "list_assets"
```

## Run

```bash
oo connector run "cincopa" --action "list_assets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Cincopa · `list_asset_tags`

List the asset tag cloud available in a Cincopa account.

- **Service**: `cincopa`
- **Action**: `list_asset_tags`
- **Action id**: `cincopa.list_asset_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cincopa" --action "list_asset_tags"
```

## Run

```bash
oo connector run "cincopa" --action "list_asset_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Canva · `get_asset`

Get metadata for a Canva asset, including owner, thumbnail, and type-specific metadata.

- **Service**: `canva`
- **Action**: `get_asset`
- **Action id**: `canva.get_asset`
- **Required scopes**: canva.asset.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "get_asset"
```

## Run

```bash
oo connector run "canva" --action "get_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

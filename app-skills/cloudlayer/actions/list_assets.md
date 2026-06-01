# cloudlayer.io · `list_assets`

List recent generated cloudlayer.io assets for the current account with optional cursor pagination.

- **Service**: `cloudlayer`
- **Action**: `list_assets`
- **Action id**: `cloudlayer.list_assets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudlayer" --action "list_assets"
```

## Run

```bash
oo connector run "cloudlayer" --action "list_assets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

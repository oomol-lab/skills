# cloudlayer.io · `get_asset`

Get one generated cloudlayer.io asset by asset ID, including its direct download URL.

- **Service**: `cloudlayer`
- **Action**: `get_asset`
- **Action id**: `cloudlayer.get_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudlayer" --action "get_asset"
```

## Run

```bash
oo connector run "cloudlayer" --action "get_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

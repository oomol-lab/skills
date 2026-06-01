# Better Proposals · `get_brand_settings`

Get default Better Proposals brand settings such as brand name and tax defaults.

- **Service**: `better_proposals`
- **Action**: `get_brand_settings`
- **Action id**: `better_proposals.get_brand_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_brand_settings"
```

## Run

```bash
oo connector run "better_proposals" --action "get_brand_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# VATlayer · `list_types`

List vatlayer reduced VAT rate type identifiers for price calculations.

- **Service**: `vatlayer`
- **Action**: `list_types`
- **Action id**: `vatlayer.list_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vatlayer" --action "list_types"
```

## Run

```bash
oo connector run "vatlayer" --action "list_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

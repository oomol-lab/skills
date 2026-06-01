# Logo.dev · `get_logo_by_crypto`

Build a Logo.dev image URL for a crypto symbol.

- **Service**: `logo_dev`
- **Action**: `get_logo_by_crypto`
- **Action id**: `logo_dev.get_logo_by_crypto`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "logo_dev" --action "get_logo_by_crypto"
```

## Run

```bash
oo connector run "logo_dev" --action "get_logo_by_crypto" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

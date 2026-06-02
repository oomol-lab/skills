# PostGrid Verify · `verify_address`

Verify and standardize a US or Canadian address with PostGrid Verify using either freeform or structured address input.

- **Service**: `postgrid_verify`
- **Action**: `verify_address`
- **Action id**: `postgrid_verify.verify_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postgrid_verify" --action "verify_address"
```

## Run

```bash
oo connector run "postgrid_verify" --action "verify_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

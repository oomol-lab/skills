# PostGrid Verify · `autocomplete_address`

Autocomplete a partially specified US or Canadian address with optional location filters.

- **Service**: `postgrid_verify`
- **Action**: `autocomplete_address`
- **Action id**: `postgrid_verify.autocomplete_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postgrid_verify" --action "autocomplete_address"
```

## Run

```bash
oo connector run "postgrid_verify" --action "autocomplete_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

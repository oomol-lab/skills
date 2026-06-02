# AddressZen · `find_address`

Autocomplete addresses from a partial query and return the official AddressZen suggestions.

- **Service**: `addresszen`
- **Action**: `find_address`
- **Action id**: `addresszen.find_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "addresszen" --action "find_address"
```

## Run

```bash
oo connector run "addresszen" --action "find_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

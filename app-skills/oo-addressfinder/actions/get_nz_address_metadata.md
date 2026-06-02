# Addressfinder · `get_nz_address_metadata`

Retrieve full metadata for a New Zealand address selected from Addressfinder autocomplete.

- **Service**: `addressfinder`
- **Action**: `get_nz_address_metadata`
- **Action id**: `addressfinder.get_nz_address_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "addressfinder" --action "get_nz_address_metadata"
```

## Run

```bash
oo connector run "addressfinder" --action "get_nz_address_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

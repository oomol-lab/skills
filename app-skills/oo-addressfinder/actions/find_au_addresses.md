# Addressfinder · `find_au_addresses`

Search Australian addresses with Addressfinder autocomplete and return matching address completions.

- **Service**: `addressfinder`
- **Action**: `find_au_addresses`
- **Action id**: `addressfinder.find_au_addresses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "addressfinder" --action "find_au_addresses"
```

## Run

```bash
oo connector run "addressfinder" --action "find_au_addresses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

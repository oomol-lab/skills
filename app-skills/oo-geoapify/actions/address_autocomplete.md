# Geoapify · `address_autocomplete`

Return address autocomplete suggestions from Geoapify.

- **Service**: `geoapify`
- **Action**: `address_autocomplete`
- **Action id**: `geoapify.address_autocomplete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geoapify" --action "address_autocomplete"
```

## Run

```bash
oo connector run "geoapify" --action "address_autocomplete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

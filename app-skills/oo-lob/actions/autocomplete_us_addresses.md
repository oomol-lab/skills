# Lob · `autocomplete_us_addresses`

Return Lob US address autocomplete suggestions for a partial address.

- **Service**: `lob`
- **Action**: `autocomplete_us_addresses`
- **Action id**: `lob.autocomplete_us_addresses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lob" --action "autocomplete_us_addresses"
```

## Run

```bash
oo connector run "lob" --action "autocomplete_us_addresses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

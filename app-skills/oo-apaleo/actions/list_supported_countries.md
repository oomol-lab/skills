# apaleo · `list_supported_countries`

List ISO country codes supported by apaleo property creation.

- **Service**: `apaleo`
- **Action**: `list_supported_countries`
- **Action id**: `apaleo.list_supported_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "list_supported_countries"
```

## Run

```bash
oo connector run "apaleo" --action "list_supported_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

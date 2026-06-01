# apaleo · `list_properties`

List properties accessible to the connected apaleo account, with optional status, archive, country, and expansion filters.

- **Service**: `apaleo`
- **Action**: `list_properties`
- **Action id**: `apaleo.list_properties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "list_properties"
```

## Run

```bash
oo connector run "apaleo" --action "list_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

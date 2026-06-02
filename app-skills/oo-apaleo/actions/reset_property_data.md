# apaleo · `reset_property_data`

Delete all transactional data for a test property.

- **Service**: `apaleo`
- **Action**: `reset_property_data`
- **Action id**: `apaleo.reset_property_data`
- **Required scopes**: apaleo.properties.manage

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "reset_property_data"
```

## Run

```bash
oo connector run "apaleo" --action "reset_property_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

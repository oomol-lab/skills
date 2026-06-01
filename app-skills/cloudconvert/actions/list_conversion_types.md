# CloudConvert · `list_conversion_types`

List possible CloudConvert conversion types for the requested input and output formats.

- **Service**: `cloudconvert`
- **Action**: `list_conversion_types`
- **Action id**: `cloudconvert.list_conversion_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "list_conversion_types"
```

## Run

```bash
oo connector run "cloudconvert" --action "list_conversion_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

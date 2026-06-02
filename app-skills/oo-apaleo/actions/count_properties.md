# apaleo · `count_properties`

Return the total number of properties accessible to the connected apaleo account.

- **Service**: `apaleo`
- **Action**: `count_properties`
- **Action id**: `apaleo.count_properties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "count_properties"
```

## Run

```bash
oo connector run "apaleo" --action "count_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# apaleo · `clone_property`

Clone an existing property into a new property with inventory and rate plans.

- **Service**: `apaleo`
- **Action**: `clone_property`
- **Action id**: `apaleo.clone_property`
- **Required scopes**: apaleo.properties.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "clone_property"
```

## Run

```bash
oo connector run "apaleo" --action "clone_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

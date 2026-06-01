# apaleo · `get_property`

Get one property by ID, including optional localized fields and expanded actions.

- **Service**: `apaleo`
- **Action**: `get_property`
- **Action id**: `apaleo.get_property`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "get_property"
```

## Run

```bash
oo connector run "apaleo" --action "get_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

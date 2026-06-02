# apaleo · `create_property`

Create a new property in apaleo.

- **Service**: `apaleo`
- **Action**: `create_property`
- **Action id**: `apaleo.create_property`
- **Required scopes**: apaleo.properties.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "create_property"
```

## Run

```bash
oo connector run "apaleo" --action "create_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes apaleo state. Confirm the exact payload and intended effect with the user before running.

# apaleo · `create_multiple_units`

Create multiple units in a single bulk request.

- **Service**: `apaleo`
- **Action**: `create_multiple_units`
- **Action id**: `apaleo.create_multiple_units`
- **Required scopes**: apaleo.units.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "create_multiple_units"
```

## Run

```bash
oo connector run "apaleo" --action "create_multiple_units" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes apaleo state. Confirm the exact payload and intended effect with the user before running.

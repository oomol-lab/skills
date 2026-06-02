# apaleo · `create_unit_group`

Create a new unit group.

- **Service**: `apaleo`
- **Action**: `create_unit_group`
- **Action id**: `apaleo.create_unit_group`
- **Required scopes**: apaleo.unit_groups.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "create_unit_group"
```

## Run

```bash
oo connector run "apaleo" --action "create_unit_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes apaleo state. Confirm the exact payload and intended effect with the user before running.

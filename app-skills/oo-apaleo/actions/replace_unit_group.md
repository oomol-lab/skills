# apaleo · `replace_unit_group`

Completely replace the mutable fields of an existing unit group.

- **Service**: `apaleo`
- **Action**: `replace_unit_group`
- **Action id**: `apaleo.replace_unit_group`
- **Required scopes**: apaleo.unit_groups.manage

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "replace_unit_group"
```

## Run

```bash
oo connector run "apaleo" --action "replace_unit_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes apaleo state. Confirm the exact payload and intended effect with the user before running.

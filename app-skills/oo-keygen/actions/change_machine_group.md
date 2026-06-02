# Keygen · `change_machine_group`

Change the group assigned to a Keygen machine.

- **Service**: `keygen`
- **Action**: `change_machine_group`
- **Action id**: `keygen.change_machine_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "change_machine_group"
```

## Run

```bash
oo connector run "keygen" --action "change_machine_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Keygen · `deactivate_machine`

Deactivate a machine from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `deactivate_machine`
- **Action id**: `keygen.deactivate_machine`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "deactivate_machine"
```

## Run

```bash
oo connector run "keygen" --action "deactivate_machine" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Keygen data. Always confirm the target and get explicit user approval before running.

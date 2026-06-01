# Keygen · `update_process`

Update a tracked process in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `update_process`
- **Action id**: `keygen.update_process`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "update_process"
```

## Run

```bash
oo connector run "keygen" --action "update_process" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Keygen state. Confirm the exact payload and intended effect with the user before running.

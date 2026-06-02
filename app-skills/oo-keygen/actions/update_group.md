# Keygen · `update_group`

Update a group in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `update_group`
- **Action id**: `keygen.update_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "update_group"
```

## Run

```bash
oo connector run "keygen" --action "update_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Keygen state. Confirm the exact payload and intended effect with the user before running.

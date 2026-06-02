# Keygen · `update_policy`

Update a license policy in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `update_policy`
- **Action id**: `keygen.update_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "update_policy"
```

## Run

```bash
oo connector run "keygen" --action "update_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Keygen state. Confirm the exact payload and intended effect with the user before running.

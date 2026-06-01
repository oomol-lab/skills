# Keygen · `create_component`

Create a machine component in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `create_component`
- **Action id**: `keygen.create_component`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "create_component"
```

## Run

```bash
oo connector run "keygen" --action "create_component" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Keygen state. Confirm the exact payload and intended effect with the user before running.

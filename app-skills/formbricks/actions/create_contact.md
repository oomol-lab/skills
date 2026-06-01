# Formbricks · `create_contact`

Create one Formbricks contact with a workspace-scoped attributes object.

- **Service**: `formbricks`
- **Action**: `create_contact`
- **Action id**: `formbricks.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "create_contact"
```

## Run

```bash
oo connector run "formbricks" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Formbricks state. Confirm the exact payload and intended effect with the user before running.

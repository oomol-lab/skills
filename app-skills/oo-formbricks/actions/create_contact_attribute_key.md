# Formbricks · `create_contact_attribute_key`

Create one Formbricks contact attribute key inside a workspace.

- **Service**: `formbricks`
- **Action**: `create_contact_attribute_key`
- **Action id**: `formbricks.create_contact_attribute_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "create_contact_attribute_key"
```

## Run

```bash
oo connector run "formbricks" --action "create_contact_attribute_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Formbricks state. Confirm the exact payload and intended effect with the user before running.

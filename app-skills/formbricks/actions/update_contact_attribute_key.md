# Formbricks · `update_contact_attribute_key`

Update one existing Formbricks contact attribute key.

- **Service**: `formbricks`
- **Action**: `update_contact_attribute_key`
- **Action id**: `formbricks.update_contact_attribute_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "update_contact_attribute_key"
```

## Run

```bash
oo connector run "formbricks" --action "update_contact_attribute_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Formbricks state. Confirm the exact payload and intended effect with the user before running.

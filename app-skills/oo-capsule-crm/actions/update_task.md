# Capsule CRM · `update_task`

Update a Capsule CRM task.

- **Service**: `capsule_crm`
- **Action**: `update_task`
- **Action id**: `capsule_crm.update_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "update_task"
```

## Run

```bash
oo connector run "capsule_crm" --action "update_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Capsule CRM state. Confirm the exact payload and intended effect with the user before running.

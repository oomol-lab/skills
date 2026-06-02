# Capsule CRM · `update_opportunity`

Update a Capsule CRM opportunity.

- **Service**: `capsule_crm`
- **Action**: `update_opportunity`
- **Action id**: `capsule_crm.update_opportunity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "update_opportunity"
```

## Run

```bash
oo connector run "capsule_crm" --action "update_opportunity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Capsule CRM state. Confirm the exact payload and intended effect with the user before running.

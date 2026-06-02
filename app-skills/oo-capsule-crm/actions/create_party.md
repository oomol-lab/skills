# Capsule CRM · `create_party`

Create a Capsule CRM party.

- **Service**: `capsule_crm`
- **Action**: `create_party`
- **Action id**: `capsule_crm.create_party`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "create_party"
```

## Run

```bash
oo connector run "capsule_crm" --action "create_party" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Capsule CRM state. Confirm the exact payload and intended effect with the user before running.

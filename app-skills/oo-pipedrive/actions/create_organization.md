# Pipedrive · `create_organization`

Create a Pipedrive organization with optional labels, address, and custom fields.

- **Service**: `pipedrive`
- **Action**: `create_organization`
- **Action id**: `pipedrive.create_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "create_organization"
```

## Run

```bash
oo connector run "pipedrive" --action "create_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pipedrive state. Confirm the exact payload and intended effect with the user before running.

# Pipedrive · `update_organization`

Update one Pipedrive organization by organization ID.

- **Service**: `pipedrive`
- **Action**: `update_organization`
- **Action id**: `pipedrive.update_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "update_organization"
```

## Run

```bash
oo connector run "pipedrive" --action "update_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pipedrive state. Confirm the exact payload and intended effect with the user before running.

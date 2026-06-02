# Pipedrive · `delete_organization`

Delete one Pipedrive organization by organization ID.

- **Service**: `pipedrive`
- **Action**: `delete_organization`
- **Action id**: `pipedrive.delete_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "delete_organization"
```

## Run

```bash
oo connector run "pipedrive" --action "delete_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pipedrive data. Always confirm the target and get explicit user approval before running.

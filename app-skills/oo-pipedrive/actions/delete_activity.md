# Pipedrive · `delete_activity`

Delete one Pipedrive activity by activity ID.

- **Service**: `pipedrive`
- **Action**: `delete_activity`
- **Action id**: `pipedrive.delete_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "delete_activity"
```

## Run

```bash
oo connector run "pipedrive" --action "delete_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pipedrive data. Always confirm the target and get explicit user approval before running.

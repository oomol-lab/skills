# Svix · `delete_endpoint`

Delete a Svix endpoint by application and endpoint identifier.

- **Service**: `svix`
- **Action**: `delete_endpoint`
- **Action id**: `svix.delete_endpoint`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "delete_endpoint"
```

## Run

```bash
oo connector run "svix" --action "delete_endpoint" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Svix data. Always confirm the target and get explicit user approval before running.

# Svix · `delete_application`

Delete a Svix application by ID or UID.

- **Service**: `svix`
- **Action**: `delete_application`
- **Action id**: `svix.delete_application`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "delete_application"
```

## Run

```bash
oo connector run "svix" --action "delete_application" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Svix data. Always confirm the target and get explicit user approval before running.

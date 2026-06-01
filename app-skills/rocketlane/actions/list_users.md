# Rocketlane · `list_users`

List Rocketlane users with pagination, sorting, and the first-pass user filters.

- **Service**: `rocketlane`
- **Action**: `list_users`
- **Action id**: `rocketlane.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocketlane" --action "list_users"
```

## Run

```bash
oo connector run "rocketlane" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

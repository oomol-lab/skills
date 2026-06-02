# Mem0 · `get_users`

List user entities from Mem0, optionally scoped by org and project.

- **Service**: `mem0`
- **Action**: `get_users`
- **Action id**: `mem0.get_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "get_users"
```

## Run

```bash
oo connector run "mem0" --action "get_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

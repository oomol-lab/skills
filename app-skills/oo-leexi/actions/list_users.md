# Leexi · `list_users`

List users in the current Leexi workspace.

- **Service**: `leexi`
- **Action**: `list_users`
- **Action id**: `leexi.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leexi" --action "list_users"
```

## Run

```bash
oo connector run "leexi" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

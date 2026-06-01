# Turso · `list_groups`

List Turso groups for one organization.

- **Service**: `turso`
- **Action**: `list_groups`
- **Action id**: `turso.list_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "list_groups"
```

## Run

```bash
oo connector run "turso" --action "list_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

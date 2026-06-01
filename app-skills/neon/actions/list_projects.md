# Neon · `list_projects`

List Neon projects available to the authenticated account.

- **Service**: `neon`
- **Action**: `list_projects`
- **Action id**: `neon.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "list_projects"
```

## Run

```bash
oo connector run "neon" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

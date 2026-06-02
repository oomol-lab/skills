# Neon · `list_branches`

List branches for a Neon project.

- **Service**: `neon`
- **Action**: `list_branches`
- **Action id**: `neon.list_branches`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "list_branches"
```

## Run

```bash
oo connector run "neon" --action "list_branches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

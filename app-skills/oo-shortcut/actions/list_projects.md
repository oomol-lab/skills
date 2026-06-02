# Shortcut · `list_projects`

List the projects available in the connected Shortcut workspace.

- **Service**: `shortcut`
- **Action**: `list_projects`
- **Action id**: `shortcut.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "list_projects"
```

## Run

```bash
oo connector run "shortcut" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

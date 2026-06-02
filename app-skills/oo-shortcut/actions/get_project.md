# Shortcut · `get_project`

Get one Shortcut project by project ID.

- **Service**: `shortcut`
- **Action**: `get_project`
- **Action id**: `shortcut.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "get_project"
```

## Run

```bash
oo connector run "shortcut" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

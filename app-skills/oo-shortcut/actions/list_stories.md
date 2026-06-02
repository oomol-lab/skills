# Shortcut · `list_stories`

List the stories in one Shortcut project.

- **Service**: `shortcut`
- **Action**: `list_stories`
- **Action id**: `shortcut.list_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "list_stories"
```

## Run

```bash
oo connector run "shortcut" --action "list_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

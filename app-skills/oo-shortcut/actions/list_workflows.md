# Shortcut · `list_workflows`

List the workflows available in the connected Shortcut workspace.

- **Service**: `shortcut`
- **Action**: `list_workflows`
- **Action id**: `shortcut.list_workflows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "list_workflows"
```

## Run

```bash
oo connector run "shortcut" --action "list_workflows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

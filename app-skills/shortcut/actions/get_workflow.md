# Shortcut · `get_workflow`

Get one Shortcut workflow by workflow ID.

- **Service**: `shortcut`
- **Action**: `get_workflow`
- **Action id**: `shortcut.get_workflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "get_workflow"
```

## Run

```bash
oo connector run "shortcut" --action "get_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

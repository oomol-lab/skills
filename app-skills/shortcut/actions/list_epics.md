# Shortcut · `list_epics`

List the epics available in the connected Shortcut workspace.

- **Service**: `shortcut`
- **Action**: `list_epics`
- **Action id**: `shortcut.list_epics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "list_epics"
```

## Run

```bash
oo connector run "shortcut" --action "list_epics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

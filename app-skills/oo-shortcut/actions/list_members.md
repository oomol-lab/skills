# Shortcut · `list_members`

List the members available in the connected Shortcut workspace.

- **Service**: `shortcut`
- **Action**: `list_members`
- **Action id**: `shortcut.list_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "list_members"
```

## Run

```bash
oo connector run "shortcut" --action "list_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

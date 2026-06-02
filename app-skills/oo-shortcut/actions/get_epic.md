# Shortcut · `get_epic`

Get one Shortcut epic by epic ID.

- **Service**: `shortcut`
- **Action**: `get_epic`
- **Action id**: `shortcut.get_epic`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "get_epic"
```

## Run

```bash
oo connector run "shortcut" --action "get_epic" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

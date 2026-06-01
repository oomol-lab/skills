# Shortcut · `get_member`

Get one Shortcut member by member UUID.

- **Service**: `shortcut`
- **Action**: `get_member`
- **Action id**: `shortcut.get_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "get_member"
```

## Run

```bash
oo connector run "shortcut" --action "get_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

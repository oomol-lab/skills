# Shortcut · `get_story`

Get one Shortcut story by story ID.

- **Service**: `shortcut`
- **Action**: `get_story`
- **Action id**: `shortcut.get_story`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "get_story"
```

## Run

```bash
oo connector run "shortcut" --action "get_story" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

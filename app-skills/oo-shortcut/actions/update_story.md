# Shortcut · `update_story`

Update one Shortcut story with the first-pass supported fields.

- **Service**: `shortcut`
- **Action**: `update_story`
- **Action id**: `shortcut.update_story`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "update_story"
```

## Run

```bash
oo connector run "shortcut" --action "update_story" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Shortcut state. Confirm the exact payload and intended effect with the user before running.

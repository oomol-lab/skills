# Shortcut · `create_story`

Create one Shortcut story with the first-pass supported fields.

- **Service**: `shortcut`
- **Action**: `create_story`
- **Action id**: `shortcut.create_story`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "create_story"
```

## Run

```bash
oo connector run "shortcut" --action "create_story" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Shortcut state. Confirm the exact payload and intended effect with the user before running.

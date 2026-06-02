# Shortcut · `update_epic`

Update one Shortcut epic with the first-pass supported fields.

- **Service**: `shortcut`
- **Action**: `update_epic`
- **Action id**: `shortcut.update_epic`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "update_epic"
```

## Run

```bash
oo connector run "shortcut" --action "update_epic" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Shortcut state. Confirm the exact payload and intended effect with the user before running.

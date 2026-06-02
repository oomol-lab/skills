# Canva · `move_folder_item`

Move a Canva folder item to another Canva folder.

- **Service**: `canva`
- **Action**: `move_folder_item`
- **Action id**: `canva.move_folder_item`
- **Required scopes**: canva.folder.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "move_folder_item"
```

## Run

```bash
oo connector run "canva" --action "move_folder_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canva state. Confirm the exact payload and intended effect with the user before running.

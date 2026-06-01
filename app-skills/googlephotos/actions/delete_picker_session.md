# Google Photos · `delete_picker_session`

Delete a Google Photos Picker session.

- **Service**: `googlephotos`
- **Action**: `delete_picker_session`
- **Action id**: `googlephotos.delete_picker_session`
- **Required scopes**: googlephotos.pick

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "delete_picker_session"
```

## Run

```bash
oo connector run "googlephotos" --action "delete_picker_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Photos data. Always confirm the target and get explicit user approval before running.

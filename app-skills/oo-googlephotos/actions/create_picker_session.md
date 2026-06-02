# Google Photos · `create_picker_session`

Create a Google Photos Picker session for selecting items from the user's library.

- **Service**: `googlephotos`
- **Action**: `create_picker_session`
- **Action id**: `googlephotos.create_picker_session`
- **Required scopes**: googlephotos.pick

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "create_picker_session"
```

## Run

```bash
oo connector run "googlephotos" --action "create_picker_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.

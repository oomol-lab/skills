# Google Photos · `get_picker_session`

Get the current state of a Google Photos Picker session.

- **Service**: `googlephotos`
- **Action**: `get_picker_session`
- **Action id**: `googlephotos.get_picker_session`
- **Required scopes**: googlephotos.pick

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "get_picker_session"
```

## Run

```bash
oo connector run "googlephotos" --action "get_picker_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Linear · `get_current_user`

Get the currently authenticated Linear user profile.

- **Service**: `linear`
- **Action**: `get_current_user`
- **Action id**: `linear.get_current_user`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_current_user"
```

## Run

```bash
oo connector run "linear" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

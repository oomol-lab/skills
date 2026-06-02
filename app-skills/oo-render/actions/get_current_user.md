# Render · `get_current_user`

Get the currently authenticated Render user profile.

- **Service**: `render`
- **Action**: `get_current_user`
- **Action id**: `render.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "get_current_user"
```

## Run

```bash
oo connector run "render" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

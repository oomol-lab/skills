# Vimeo · `get_current_user`

Get the authenticated Vimeo user profile.

- **Service**: `vimeo`
- **Action**: `get_current_user`
- **Action id**: `vimeo.get_current_user`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "get_current_user"
```

## Run

```bash
oo connector run "vimeo" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

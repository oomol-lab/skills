# Figma · `get_current_user`

Get the current Figma user associated with the API key.

- **Service**: `figma`
- **Action**: `get_current_user`
- **Action id**: `figma.get_current_user`
- **Required scopes**: current_user:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_current_user"
```

## Run

```bash
oo connector run "figma" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

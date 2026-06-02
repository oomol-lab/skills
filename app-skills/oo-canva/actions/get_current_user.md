# Canva · `get_current_user`

Get the Canva user and profile associated with the current OAuth token.

- **Service**: `canva`
- **Action**: `get_current_user`
- **Action id**: `canva.get_current_user`
- **Required scopes**: canva.profile.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "get_current_user"
```

## Run

```bash
oo connector run "canva" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

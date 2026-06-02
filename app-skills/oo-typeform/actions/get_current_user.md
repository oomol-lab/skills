# Typeform · `get_current_user`

Get the current Typeform user associated with the authenticated personal access token.

- **Service**: `typeform`
- **Action**: `get_current_user`
- **Action id**: `typeform.get_current_user`
- **Required scopes**: accounts:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typeform" --action "get_current_user"
```

## Run

```bash
oo connector run "typeform" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

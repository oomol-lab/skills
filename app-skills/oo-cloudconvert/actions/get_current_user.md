# CloudConvert · `get_current_user`

Get the current CloudConvert user and remaining credits for the API token.

- **Service**: `cloudconvert`
- **Action**: `get_current_user`
- **Action id**: `cloudconvert.get_current_user`
- **Required scopes**: user.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "get_current_user"
```

## Run

```bash
oo connector run "cloudconvert" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

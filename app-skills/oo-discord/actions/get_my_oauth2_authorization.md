# Discord · `get_my_oauth2_authorization`

Get the current OAuth2 authorization information.

- **Service**: `discord`
- **Action**: `get_my_oauth2_authorization`
- **Action id**: `discord.get_my_oauth2_authorization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_my_oauth2_authorization"
```

## Run

```bash
oo connector run "discord" --action "get_my_oauth2_authorization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

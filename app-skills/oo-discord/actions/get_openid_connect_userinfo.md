# Discord · `get_openid_connect_userinfo`

Get OpenID Connect userinfo for the current OAuth user.

- **Service**: `discord`
- **Action**: `get_openid_connect_userinfo`
- **Action id**: `discord.get_openid_connect_userinfo`
- **Required scopes**: discord.openid

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_openid_connect_userinfo"
```

## Run

```bash
oo connector run "discord" --action "get_openid_connect_userinfo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

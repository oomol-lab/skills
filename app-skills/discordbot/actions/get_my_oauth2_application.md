# Discord Bot · `get_my_oauth2_application`

Get the current OAuth2 application information.

- **Service**: `discordbot`
- **Action**: `get_my_oauth2_application`
- **Action id**: `discordbot.get_my_oauth2_application`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_my_oauth2_application"
```

## Run

```bash
oo connector run "discordbot" --action "get_my_oauth2_application" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

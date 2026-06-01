# Discord · `get_current_user_application_entitlements`

Get entitlements for the current OAuth user under a Discord application.

- **Service**: `discord`
- **Action**: `get_current_user_application_entitlements`
- **Action id**: `discord.get_current_user_application_entitlements`
- **Required scopes**: discord.entitlements.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_current_user_application_entitlements"
```

## Run

```bash
oo connector run "discord" --action "get_current_user_application_entitlements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

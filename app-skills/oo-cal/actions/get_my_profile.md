# Cal.com · `get_my_profile`

Get the current Cal.com user profile from the authenticated OAuth account.

- **Service**: `cal`
- **Action**: `get_my_profile`
- **Action id**: `cal.get_my_profile`
- **Required scopes**: cal.profile.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_my_profile"
```

## Run

```bash
oo connector run "cal" --action "get_my_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

# Cal.com · `update_my_profile`

Update the current Cal.com user's profile fields such as name, bio, timezone, and branding.

- **Service**: `cal`
- **Action**: `update_my_profile`
- **Action id**: `cal.update_my_profile`
- **Required scopes**: cal.profile.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "update_my_profile"
```

## Run

```bash
oo connector run "cal" --action "update_my_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.

# Cal.com · `update_user_profile_details`

Compatibility alias for Composio's update-user-profile-details action. Updates the authenticated Cal.com user's profile.

- **Service**: `cal`
- **Action**: `update_user_profile_details`
- **Action id**: `cal.update_user_profile_details`
- **Required scopes**: cal.profile.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "update_user_profile_details"
```

## Run

```bash
oo connector run "cal" --action "update_user_profile_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
